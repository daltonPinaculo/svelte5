<script lang="ts">
	import Input from "../../components/Input.svelte";


    let htmlDiv = $state<HTMLDivElement>()
    let value = $state<string>()

    function changeColor(){
        if(htmlDiv){
            htmlDiv.style.backgroundColor='#' + Math.floor(Math.random() * 16777215).toString(16);
        }
    }

</script>

<button onclick={changeColor} class="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
    Modificar cor da div
</button>

<div class="flex flex-col m-8 p-32 text-cyan-950 text-lg items-center justify-center  bg-gray-100 border border-gray-300 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105" 
     bind:this={htmlDiv}>
    Div Container Bindado
</div>


<Input label="Label foda"  bind:value>
    Componente slot
</Input>
<div class="text-lg font-medium text-gray-800">
    Valor bindado: 
    <b class="text-cyan-600">{value}</b>
</div>