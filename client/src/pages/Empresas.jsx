import FormEmpresa from "../Components/FormEmpresa"
import ListasDeEmpresas from "../Components/ListasDeEmpresas"
import FormProductos from "../Components/FormProductos";
import ListaDeProductos from "../Components/ListaDeProductos";
import Inventario from "./Inventario";



const Empresas = () => {

  return (
    <div>
      <div className="md:flex md:min-h-screen">
        <aside className="md:w-1/3 bg-slate-400 px-5 py-10">
          <h2 className="text-4xl font-black text-center text-black">Empresas</h2>
          <FormEmpresa/>
        </aside>

        <main className="md:w-3/4 p-10 md:h-screen ">
          <ListasDeEmpresas/>
        </main>
      </div>

      <hr /><br />

      <div className="md:flex md:min-h-screen">
        <aside className="md:w-1/3 bg-slate-400 px-5 py-10">
          <h2 className="text-4xl font-black text-center text-black">Porductos</h2>
          <FormProductos/>
        </aside>

        <main className="md:w-3/4 p-10 md:h-screen ">
          <ListaDeProductos />
        </main>
      </div>

      <hr /><br />

      <div className="md:flex w-full md:min-h-screen mt-10">
        <main className="w-full p-10 md:h-screen ">
          <Inventario />
        </main>
      </div>







    </div>


  )
}

export default Empresas