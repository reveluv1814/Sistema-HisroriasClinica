import { useEffect, useState } from "react";
import TablePagination from "../../components/TablePagination";
import doctorService from "./../../services/doctorService";

const Doctores = () => {
  const [doctores, setDoctores] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [q, setq] = useState("");
  const [limit, setLimit] = useState(10);
  const columnas = [
    { key: "id", label: "COD" },
    { key: "persona.apellidoPaterno", label: "APELLIDO PATERNO." },
    { key: "persona.apellidoMaterno", label: "APELLIDO MATERNO." },
    { key: "persona.nombre", label: "NOMBRE" },
    { key: "persona.ci", label: "CI" },
    { key: "usuario.email", label: "CORREO ELECTRONICO" },
    { key: "unidad", label: "UNIDAD" },
    { key: "usuario.createdAt", label: "CREADO EN" },
  ];
  useEffect(() => {
    getDoctores();
  }, []);
  //FUNCIONES
  const getDoctores = async (nroPage = 1, limit = 10) => {
    setPage(nroPage);
    const { data } = await doctorService.listar(q, nroPage, limit);
    console.log(data.doctores);
    console.log("TOTAL:", data.doctores.count);
    console.log("Registros:", data.doctores.rows);
    setTotal(data.doctores.count);
    setDoctores(data.doctores.rows);
  };
  return (
    <>
      <div className="max-w-lg">
        <h3 className="text-gray-800 text-xl font-bold sm:text-2xl font-inter">
          Doctores
        </h3>
        <p className="text-gray-600 mt-2">
          Aqui se encuentran todos los <b>doctores</b> registrados en el sistema.
        </p>
      </div>
      <div className="mt-2 shadow-sm border rounded-lg overflow-x-auto">
        <TablePagination
          columnas={columnas}
          datos={doctores}
          total={total}
          page={page}
          fetchData={getDoctores}
        ></TablePagination>
      </div>
    </>
  );
};

export default Doctores;
