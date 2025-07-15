<script>
    import { translateText } from 'lang'
    import { categorieName } from './../data'

    export let isTypeFilter;
    export let updateFilter;
    export let closeFilter;


    let filter = isTypeFilter;

    const onUpdateFilter = (id) => {
        const index = filter.findIndex(e => e === id);

        if (typeof filter [index] !== "undefined")
            filter.splice(index, 1);
        else
            filter.push(id);

        filter = filter;
    }
    import { fade } from 'svelte/transition'

</script>
<div in:fade class="box-100">
    <div class="newphone__maps_header m-top newphone__project_padding20 mb-10">{translateText('player2', 'Фильтры')}:</div>
    <div class="newphone__ads_list filter">
        {#each Object.values(categorieName) as item, id}
            <button class="box-between w-100" on:click={() => onUpdateFilter(id)} on:keydown={(e) => e.key === 'Enter' && onUpdateFilter(id)} tabindex="0">
                <div>{item}</div>

                <div class="newphone__checkbox">
                    <input class="styled-checkbox" id="styled-checkbox-1" type="checkbox" disabled checked={filter.includes(id)}>
                    <label class="styled-checkbox1" for="styled-checkbox-1"></label>
                </div>
            </button>
        {/each}
    </div>
    <button class="newphone__project_button" on:click={() => updateFilter(filter)} on:keydown={(e) => e.key === 'Enter' && updateFilter(filter)} tabindex="0">{translateText('player2', 'Применить фильтр')}</button>
    <button class="red box-center" on:click={closeFilter} on:keydown={(e) => e.key === 'Enter' && closeFilter()} tabindex="0">{translateText('player2', 'Назад')}</button>
</div>