<script lang="ts">
    import { Toaster } from "./toast.svelte";
  
    let toaster = new Toaster();
  
    function generateRandomString(length: number): string {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    }
  

</script>

<h1 class="text-3xl font-bold mb-4">Gerador de toasts reativo por classe</h1>   

<button on:click={()=>toaster.add(generateRandomString(30))} class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
  Clique
</button>

<div class="flex flex-col gap-8 mt-8">
  {#each toaster.toast as toast}
    <blockquote class="p-4 flex justify-between border-l-4 border-blue-500 bg-gray-100 rounded">
      {toast.mensagem}
      <button on:click={() => toaster.delete(toast.id)} class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300">
        Deletar
      </button>
    </blockquote>
  {/each}
</div>
