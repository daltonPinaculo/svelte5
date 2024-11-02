type Toast = {
    id:number,
    mensagem:string
}

export class Toaster{

    public toast = $state<Toast[]>([]);

    add(mensagem:string){
        this.toast.push({mensagem,id:Math.floor(Math.random()*100000)})
    }

    delete(id:number){
        this.toast = this.toast.filter((obj)=>obj.id!==id);
    }

}

