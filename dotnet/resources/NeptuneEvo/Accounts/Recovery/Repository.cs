using Database;
using GTANetworkAPI;
using NeptuneEvo.Handles;
using LinqToDB;
using NeptuneEvo.Character;
using NeptuneEvo.Chars;
using NeptuneEvo.Players;
using Redage.SDK;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Localization;
using System.Net.Mail;
using System.Net;

namespace NeptuneEvo.Accounts.Recovery
{
    class Repository
    {
        private static readonly nLog Log = new nLog("Accounts.Repository.Events");
        private static string mailFrom = "familyrp@mail.ru"; //Твоя почта mail.ru
        private static string mailTitle1 = "Password Restore";
        private static string mailBody2 = "<p>Помимо этого Вы можете изменить его прямо сейчас в игре, введя команду /password и новый желаемый пароль через пробел.</p> <p>Пример: /password 1234 </p>";

        private static string Server = "smtp.mail.ru";
        private static string Password = "p4fgGVqMn16CrZfbgbR5"; //Mail аккаунт -> Безопасность -> Пароли для внешних приложений
        private static int Port = 587;
        public static void SendEmail(ExtPlayer player, string login)
        {
            try
            {
	            var sessionData = player.GetSessionData();
                if (sessionData == null) return;
                var auntificationData = sessionData.AuntificationData;

                login = login.ToLower();

                if (!auntificationData.IsCreateAccount)
                {
                    Notify.Send(player, NotifyType.Error, NotifyPosition.BottomCenter, LangFunc.GetText(LangType.Ru, DataName.RecoveryCantFind), 4500);
                    Trigger.ClientEvent(player, "restorepassstep", 2);
                    return;
                }
                else if (!auntificationData.Login.ToLower().Equals(login) && !auntificationData.Email.ToLower().Equals(login))
                {
                    Notify.Send(player, NotifyType.Error, NotifyPosition.BottomCenter, LangFunc.GetText(LangType.Ru, DataName.RecoveryCantFind), 4500);
                    Trigger.ClientEvent(player, "restorepassstep", 2);
                    return;
                }
                else if (!auntificationData.Email.Contains("@"))
                {
                    Notify.Send(player, NotifyType.Error, NotifyPosition.BottomCenter, LangFunc.GetText(LangType.Ru, DataName.RecoveryEmailCant), 4500);
                    Trigger.ClientEvent(player, "restorepassstep", 2);
                    return;
                }
                sessionData.RecoveryCode = Generate.RandomOneTimePassword();
                if (sessionData.RecoveryCode == null)
                {
                    Notify.Send(player, NotifyType.Error, NotifyPosition.BottomCenter, LangFunc.GetText(LangType.Ru, DataName.RecoveryError), 5000);
                    Trigger.ClientEvent(player, "restorepassstep", 2);
                    return;
                }


                MailMessage msg;
                msg = new MailMessage(mailFrom, auntificationData.Email, mailTitle1, $"Код для восстановления пароля: {sessionData.RecoveryCode}");
                msg.IsBodyHtml = true;


                SmtpClient smtpClient = new SmtpClient(Server, Port)
                {
                    UseDefaultCredentials = false,
                    Credentials =  new NetworkCredential(mailFrom, Password), //mailAuthentication,
                    EnableSsl = true,
                    DeliveryMethod = SmtpDeliveryMethod.Network
                };

                smtpClient.Send(msg);
                Notify.Send(player, NotifyType.Success, NotifyPosition.BottomCenter, $"Сообщение с кодом для восстановления пароля успешно выслано на {Generate.ObfuscateEmail(auntificationData.Email)}.", 5000);
                Trigger.ClientEvent(player, "restorepassstep", 1);
            }
            catch (Exception e)
            {
                Debugs.Repository.Exception(e);
            }
        }
        public static async void RecoveryPassword(ExtPlayer player, string code)
        {
            try
            {
	            var sessionData = player.GetSessionData();
                if (sessionData == null) return;
                var auntificationData = sessionData.AuntificationData;

                if (!auntificationData.IsCreateAccount)
                {
                    Notify.Send(player, NotifyType.Error, NotifyPosition.BottomCenter, LangFunc.GetText(LangType.Ru, DataName.RecoveryCantFind), 4500);
                    Trigger.ClientEvent(player, "restorepassstep", 2);
                    return;
                }
                if (code == sessionData.RecoveryCode)
                {
                    Log.Debug($"{sessionData.RealSocialClub} удачно восстановил пароль!", nLog.Type.Info);
                    sessionData.RecoveryCode = null;
                    string newPassword = Generate.RandomString(9);
                    if (newPassword == null)
                    {
                        Notify.Send(player, NotifyType.Error, NotifyPosition.BottomCenter, LangFunc.GetText(LangType.Ru, DataName.RecoveryError), 5000);
                        Trigger.ClientEvent(player, "restorepassstep", 2);
                        return;
                    }



                    MailMessage msg;
                    msg = new MailMessage(mailFrom, auntificationData.Email, mailTitle1, $"Ваш новый пароль: {newPassword} {mailBody2}");
                    msg.IsBodyHtml = true;


                    SmtpClient smtpClient = new SmtpClient(Server, Port)
                    {
                        UseDefaultCredentials = false,
                        Credentials = new NetworkCredential(mailFrom, Password),
                        EnableSsl = true,
                        DeliveryMethod = SmtpDeliveryMethod.Network
                    };


                    smtpClient.Send(msg);

                    
                    auntificationData.Password = Accounts.Repository.GetSha256(newPassword.ToString());

                    await using var db = new ServerBD("MainDB");//В отдельном потоке

                    await db.Accounts
                        .Where(v => v.Login == auntificationData.Login)
                        .Set(v => v.Password, auntificationData.Password)
                        .UpdateAsync();

                    Autorization.Repository.AutorizationAccount(player, auntificationData.Login, auntificationData.Password).Wait();
                    
                    Notify.Send(player, NotifyType.Success, NotifyPosition.BottomCenter, "Вы успешно восстановили доступ к аккаунту. Новый пароль выслан на емайл!", 5000);
                    Notify.Send(player, NotifyType.Success, NotifyPosition.BottomCenter, "Так же, Вы можете изменить его прямо сейчас в игры введя /password и новый желаемый пароль через пробел. Пример: /password 123", 10000);
                }
                else
                {
                    Notify.Send(player, NotifyType.Error, NotifyPosition.BottomCenter, LangFunc.GetText(LangType.Ru, DataName.CodeDoesntMatter), 4500);
                    Trigger.ClientEvent(player, "restorepassstep", 1);
                }
            }
            catch (Exception e)
            {
                Debugs.Repository.Exception(e);
            }
        }
    }
}
