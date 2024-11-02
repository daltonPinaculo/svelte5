<script lang="ts">

    interface Props {
        value?: string;
        label: string;
        children?: any; 
    }
    
    let {
        value = $bindable(), 
        label="Label",
        ...props
    }:Props = $props();

</script>

<div class="flex flex-col mb-4">

    <span class="text-gray-700 font-semibold mb-2">{label}</span>

    <input type="text" bind:value={value} class="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
    placeholder="Digite aqui...">

    {@render props.children?.()}
    
</div>
