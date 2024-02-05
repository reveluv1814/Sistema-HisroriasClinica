import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import historiaService from "./../../../services/historiaService";

const AntecedentesPForm = ({ historiaId }) => {
  const [antecedenteP, setAntecedenteP] = useState("load");
  const [editando, setEditando] = useState(false);
  const [agregar, setAgregar] = useState(false);
  /*carga el apartado */
  useEffect(() => {
    const getApartado = async () => {
      try {
        const historiaFetch = await historiaService.verApartados(historiaId);
        //console.log(historiaFetch.data);
        setAntecedenteP(historiaFetch.data.antecedenteP);
      } catch (error) {
        console.log(error);
      }
    };
    getApartado();
  }, []);
  /*funciones para los botones de crear y editar */
  const handleEditar = () => {
    setEditando(!editando);
  };
  const handleAgregar = () => {
    setAgregar(!agregar);
  };
  /*funciones para hacer el fecth post y patch*/
  const handlePost = async (values) => {
    /* try {
      const datosAEnviar = transformarDatosParaEnviar(values);
      console.log(datosAEnviar);
      const res = await historiaService.guardarAntecedenteF(historiaId, {
        antecedenteF: datosAEnviar,
      });
      setDatos(res.data);
      setAgregar(false);
    } catch (error) {
      console.log(error);
    } */
  };
  const handlePatch = async (values) => {
    /* try {
      const datosAEnviar = transformarDatosParaEnviar(values);
      await historiaService.editarAntecedenteF(datos.id, {
        antecedenteF: datosAEnviar,
      });
      const historiaFetch = await historiaService.verApartados(historiaId);
      setDatos(historiaFetch.data.antecedenteF);
      setEditando(false);
    } catch (error) {
      console.log(error);
    } */
  };
  //funcion para enviar null si es que no se llena los campos
  const transformarDatosParaEnviar = (values) => {
    const camposNulos = [
      "pat_fiebre",
      "pat_enfInfec",
      "pat_diabetes",
      "pat_epilepsia",
      "factFis_rayosx",
      "factFis_ecografia",
      "factFis_numVeces",
      "gesta",
      "gesta_para",
      "gesta_nroNativivos",
      "gesta_malformados",
      "gesta_nroNatimortos",
      "gesta_nroAB",
      "gesta_exp",
      "gesta_anticonceptivos",
      "gesta_periodo_1_2",
      "gesta_periodo_2_3",
      "gesta_periodo_3_4",
      "dn_pc",
      "dn_fotop",
      "dn_exsanguineo",
      "dn_exsan_fiebre",
      "dn_exsan_convul",
      "dn_hemorragia",
      "dn_altCriptorquidea",
      "dn_altCardiopatia",
      "dn_altFlap",
      "dn_altAnal",
      "dn_altNeural",
    ];
    const valoresTransformados = { ...values };
    camposNulos.forEach((campo) => {
      if (valoresTransformados[campo] === "") {
        valoresTransformados[campo] = null;
      }
    });

    return valoresTransformados;
  };
  /*
  g_embarazo: { allowNull: true, type: DataTypes.STRING },
  g_obs: { allowNull: true, type: DataTypes.STRING },
  pat_fiebre: { allowNull: true, type: DataTypes.BOOLEAN },
  pat_enfInfec: { allowNull: true, type: DataTypes.BOOLEAN },
  pat_diabetes: { allowNull: true, type: DataTypes.BOOLEAN },
  pat_epilepsia: { allowNull: true, type: DataTypes.BOOLEAN },
  pat_otras: { allowNull: true, type: DataTypes.STRING },
  factFis_rayosx: { allowNull: true, type: DataTypes.BOOLEAN },
  factFis_ecografia: { allowNull: true, type: DataTypes.BOOLEAN },
  factFis_lugar: { allowNull: true, type: DataTypes.STRING },
  factFis_numVeces: { allowNull: true, type: DataTypes.INTEGER },
  factQuim_farmacos: { allowNull: true, type: DataTypes.STRING },
  factQuim_farmOtros: { allowNull: true, type: DataTypes.STRING },
  factQuim_anticonceptivos: { allowNull: true, type: DataTypes.STRING },
  fact_Quim_gestagenosAB: { allowNull: true, type: DataTypes.STRING },
  factQuim_expProfesional: { allowNull: true, type: DataTypes.STRING },
  factQuim_enolismo: { allowNull: true, type: DataTypes.STRING },
  gesta: { allowNull: true, type: DataTypes.INTEGER },
  gesta_para: { allowNull: true, type: DataTypes.INTEGER },
  gesta_nroNativivos: { allowNull: true, type: DataTypes.INTEGER },
  gesta_malformados: { allowNull: true, type: DataTypes.INTEGER },
  gesta_nroNatimortos: { allowNull: true, type: DataTypes.INTEGER },
  gesta_nroAB: { allowNull: true, type: DataTypes.INTEGER },
  gesta_exp: { allowNull: true, type: DataTypes.INTEGER },
  gesta_anticonceptivos: { allowNull: true, type: DataTypes.BOOLEAN },
  gesta_anticonsTipo: { allowNull: true, type: DataTypes.STRING },
  gesta_periodo_1_2: { allowNull: true, type: DataTypes.INTEGER },
  gesta_periodo_2_3: { allowNull: true, type: DataTypes.INTEGER },
  gesta_periodo_3_4: { allowNull: true, type: DataTypes.INTEGER },
  gesta_periodoUso: { allowNull: true, type: DataTypes.STRING },
  parto: { allowNull: true, type: DataTypes.STRING },
  parto_porque: { allowNull: true, type: DataTypes.STRING },
  dn_peso: { allowNull: true, type: DataTypes.STRING },
  dn_talla: { allowNull: true, type: DataTypes.STRING },
  dn_pc: { allowNull: true, type: DataTypes.DOUBLE },
  dn_apgar: { allowNull: true, type: DataTypes.STRING },
  dn_llanto: { allowNull: true, type: DataTypes.STRING },
  dn_oxigeno: { allowNull: true, type: DataTypes.STRING },
  dn_ictericia: { allowNull: true, type: DataTypes.STRING },
  dn_cianosis: { allowNull: true, type: DataTypes.STRING },
  dn_incubadora: { allowNull: true, type: DataTypes.STRING },
  dn_fotop: { allowNull: true, type: DataTypes.BOOLEAN },
  dn_exsanguineo: { allowNull: true, type: DataTypes.BOOLEAN },
  dn_exsan_fiebre: { allowNull: true, type: DataTypes.BOOLEAN },
  dn_exsan_convul: { allowNull: true, type: DataTypes.BOOLEAN },
  dn_hemorragia: { allowNull: true, type: DataTypes.BOOLEAN },
  dn_hemoIni: { allowNull: true, type: DataTypes.STRING },
  dn_hemoDura: { allowNull: true, type: DataTypes.STRING },
  dn_altCriptorquidea: { allowNull: true, type: DataTypes.BOOLEAN },
  dn_altCardiopatia: { allowNull: true, type: DataTypes.BOOLEAN },
  dn_altFlap: { allowNull: true, type: DataTypes.BOOLEAN },
  dn_altAnal: { allowNull: true, type: DataTypes.BOOLEAN },
  dn_altNeural: { allowNull: true, type: DataTypes.BOOLEAN },
  dn_altObs: { allowNull: true, type: DataTypes.STRING },
  */
  //formulario
  const Formm = ({ isCreate, handleFun }) => {
    //valores iniciales
    const antecedentePValues = antecedenteP
      ? {
          g_embarazo: antecedenteP.g_embarazo,
          g_obs: antecedenteP.g_obs,
          pat_fiebre: antecedenteP.pat_fiebre,
          pat_enfInfec: antecedenteP.pat_enfInfec,
          pat_diabetes: antecedenteP.pat_diabetes,
          pat_epilepsia: antecedenteP.pat_epilepsia,
          pat_otras: antecedenteP.pat_otras,
          factFis_rayosx: antecedenteP.factFis_rayosx,
          factFis_ecografia: antecedenteP.factFis_ecografia,
          factFis_lugar: antecedenteP.factFis_lugar,
          factFis_numVeces: antecedenteP.factFis_numVeces,
          factQuim_farmacos: antecedenteP.factQuim_farmacos,
          factQuim_farmOtros: antecedenteP.factQuim_farmOtros,
          factQuim_anticonceptivos: antecedenteP.factQuim_anticonceptivos,
          fact_Quim_gestagenosAB: antecedenteP.fact_Quim_gestagenosAB,
          factQuim_expProfesional: antecedenteP.factQuim_expProfesional,
          factQuim_enolismo: antecedenteP.factQuim_enolismo,
          gesta: antecedenteP.gesta,
          gesta_para: antecedenteP.gesta_para,
          gesta_nroNativivos: antecedenteP.gesta_nroNativivos,
          gesta_malformados: antecedenteP.gesta_malformados,
          gesta_nroNatimortos: antecedenteP.gesta_nroNatimortos,
          gesta_nroAB: antecedenteP.gesta_nroAB,
          gesta_exp: antecedenteP.gesta_exp,
          gesta_anticonceptivos: antecedenteP.gesta_anticonceptivos,
          gesta_anticonsTipo: antecedenteP.gesta_anticonsTipo,
          gesta_periodo_1_2: antecedenteP.gesta_periodo_1_2,
          gesta_periodo_2_3: antecedenteP.gesta_periodo_2_3,
          gesta_periodo_3_4: antecedenteP.gesta_periodo_3_4,
          gesta_periodoUso: antecedenteP.gesta_periodoUso,
          parto: antecedenteP.parto,
          parto_porque: antecedenteP.parto_porque,
          dn_peso: antecedenteP.dn_peso,
          dn_talla: antecedenteP.dn_talla,
          dn_pc: antecedenteP.dn_pc,
          dn_apgar: antecedenteP.dn_apgar,
          dn_llanto: antecedenteP.dn_llanto,
          dn_oxigeno: antecedenteP.dn_oxigeno,
          dn_ictericia: antecedenteP.dn_ictericia,
          dn_cianosis: antecedenteP.dn_cianosis,
          dn_incubadora: antecedenteP.dn_incubadora,
          dn_fotop: antecedenteP.dn_fotop,
          dn_exsanguineo: antecedenteP.dn_exsanguineo,
          dn_exsan_fiebre: antecedenteP.dn_exsan_fiebre,
          dn_exsan_convul: antecedenteP.dn_exsan_convul,
          dn_hemorragia: antecedenteP.dn_hemorragia,
          dn_hemoIni: antecedenteP.dn_hemoIni,
          dn_hemoDura: antecedenteP.dn_hemoDura,
          dn_altCriptorquidea: antecedenteP.dn_altCriptorquidea,
          dn_altCardiopatia: antecedenteP.dn_altCardiopatia,
          dn_altFlap: antecedenteP.dn_altFlap,
          dn_altAnal: antecedenteP.dn_altAnal,
          dn_altNeural: antecedenteP.dn_altNeural,
          dn_altObs: antecedenteP.dn_altObs,
        }
      : {
          g_embarazo: "",
          g_obs: "",
          pat_fiebre: null,
          pat_enfInfec: null,
          pat_diabetes: null,
          pat_epilepsia: null,
          pat_otras: "",
          factFis_rayosx: nll,
          factFis_ecografia: null,
          factFis_lugar: "",
          factFis_numVeces: null,
          factQuim_farmacos: "",
          factQuim_farmOtros: "",
          factQuim_anticonceptivos: "",
          fact_Quim_gestagenosAB: "",
          factQuim_expProfesional: "",
          factQuim_enolismo: "",
          gesta: null,
          gesta_para: null,
          gesta_nroNativivos: null,
          gesta_malformados: null,
          gesta_nroNatimortos: null,
          gesta_nroAB: null,
          gesta_exp: null,
          gesta_anticonceptivos: null,
          gesta_anticonsTipo: "",
          gesta_periodo_1_2: null,
          gesta_periodo_2_3: null,
          gesta_periodo_3_4: null,
          gesta_periodoUso: "",
          parto: "",
          parto_porque: "",
          dn_peso: "",
          dn_talla: "",
          dn_pc: null,
          dn_apgar: "",
          dn_llanto: "",
          dn_oxigeno: "",
          dn_ictericia: "",
          dn_cianosis: "",
          dn_incubadora: "",
          dn_fotop: null,
          dn_exsanguineo: null,
          dn_exsan_fiebre: null,
          dn_exsan_convul: null,
          dn_hemorragia: null,
          dn_hemoIni: "",
          dn_hemoDura: "",
          dn_altCriptorquidea: null,
          dn_altCardiopatia: null,
          dn_altFlap: null,
          dn_altAnal: null,
          dn_altNeural: null,
          dn_altObs: "",
        };

    return (
      <div className="bg-blue-100 dark:bg-sky-900 rounded-lg py-4 shadow-lg w-9/12">
        <Formik
          enableReinitialize
          initialValues={antecedentePValues}
          onSubmit={handleFun}
        >
          {({ values, handleSubmit, isValidating, isValid, isSubmitting }) => (
            <Form onSubmit={handleSubmit} className="flex flex-col px-7 ">
              <div className="">
                <div className="flex flex-col justify-evenly mb-2 max-xl:flex-col">
                  <span className="font-inter font-semibold text-gray-600 text-lg dark:text-white/75">
                    1 Gestación:
                  </span>
                  <div className="flex flex-row max-xl:flex-col">
                    <label
                      htmlFor="g_embarazo"
                      className="pt-2 mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                    >
                      Embarazo:
                    </label>
                    <Field
                      as="select"
                      name="g_embarazo"
                      value={values?.g_embarazo}
                      disabled={!isCreate && !editando}
                      className=" px-2 text-base cursor-pointer max-xl:text-sm text-zinc-500 shadow appearance-none border border-gray-300 bg-zinc-200 rounded-lg w-56 dark:bg-zinc-600 dark:border-zinc-700 dark:text-gray-300 "
                    >
                      <option value="" disabled hidden>
                        Seleccione una opción
                      </option>
                      <option value="a termino">a término</option>
                      <option value="a termino">pre-término</option>
                      <option value="a termino">post-término</option>
                    </Field>
                  </div>

                  <label
                    htmlFor="g_obs"
                    className="pt-2 mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                  >
                    Obs.:
                  </label>

                  <Field
                    component="textarea"
                    name="g_obs"
                    value={values?.g_obs}
                    rows={3}
                    className="p-2 text-base max-xl:text-sm text-zinc-700 shadow appearance-none border border-gray-300 bg-stone-200 rounded-lg w-full dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600"
                    disabled={!isCreate && !editando}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-inter font-semibold text-gray-600 text-lg dark:text-white/75">
                    2 Patologías en el embarazo:
                  </span>
                  <div className="flex flex-row mt-3 mb-2 max-xl:flex-col items-center justify-evenly">
                    <div>
                      <label
                        htmlFor="pat_fiebre"
                        className="pt-2 mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                        disabled={!isCreate && !editando}
                      >
                        Fiebre:
                      </label>
                      <Field
                        type="checkbox"
                        name="pat_fiebre"
                        value={values?.pat_fiebre ?? ""}
                        checked={values?.pat_fiebre ?? false}
                        className=" text-base max-xl:text-sm text-sky-600 shadow appearance-none border border-gray-300 bg-stone-200 rounded-sm  dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600"
                        disabled={!isCreate && !editando}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="pat_enfInfec"
                        className="pt-2 mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                        disabled={!isCreate && !editando}
                      >
                        Enf. Infec.:
                      </label>
                      <Field
                        type="checkbox"
                        name="pat_enfInfec"
                        value={values?.pat_enfInfec ?? ""}
                        checked={values?.pat_enfInfec ?? false}
                        className=" text-base max-xl:text-sm text-sky-600 shadow appearance-none border border-gray-300 bg-stone-200 rounded-sm  dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600 "
                        disabled={!isCreate && !editando}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="pat_diabetes"
                        className="pt-2 mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                        disabled={!isCreate && !editando}
                      >
                        Diabetes:
                      </label>
                      <Field
                        type="checkbox"
                        name="pat_diabetes"
                        value={values?.pat_diabetes ?? ""}
                        checked={values?.pat_diabetes ?? false}
                        className=" text-base max-xl:text-sm text-sky-600 shadow appearance-none border border-gray-300 bg-stone-200 rounded-sm  dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600 "
                        disabled={!isCreate && !editando}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="pat_epilepsia"
                        className="pt-2 mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                        disabled={!isCreate && !editando}
                      >
                        Epilepsia:
                      </label>
                      <Field
                        type="checkbox"
                        name="pat_epilepsia"
                        value={values?.pat_epilepsia ?? ""}
                        checked={values?.pat_epilepsia ?? false}
                        className=" text-base max-xl:text-sm text-sky-600 shadow appearance-none border border-gray-300 bg-stone-200 rounded-sm  dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600 "
                        disabled={!isCreate && !editando}
                      />
                    </div>
                  </div>
                  <label
                    htmlFor="pat_otras"
                    className="pt-2 mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                  >
                    Otras enfermedades crónicas.:
                  </label>

                  <Field
                    component="textarea"
                    name="pat_otras"
                    value={values?.pat_otras}
                    rows={2}
                    className="p-2 text-base max-xl:text-sm text-zinc-700 shadow appearance-none border border-gray-300 bg-stone-200 rounded-lg w-full dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600"
                    disabled={!isCreate && !editando}
                  />
                </div>
                <div className="flex flex-col justify-evenly mb-2 max-xl:flex-col">
                  <span className="font-inter font-semibold text-gray-600 text-lg max-xl:text-sm dark:text-white/75">
                    3 Factores físicos durante el embarazo:
                  </span>

                  <div className="flex flex-row mt-3 mb-2 max-xl:flex-col items-center justify-evenly">
                    <div>
                      <label
                        htmlFor="factFis_rayosx"
                        className="pt-2 mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                        disabled={!isCreate && !editando}
                      >
                        Rayos X:
                      </label>
                      <Field
                        as="select"
                        name="factFis_rayosx"
                        className="px-2 text-base cursor-pointer max-xl:text-sm text-zinc-500 shadow appearance-none border border-gray-300 bg-zinc-200 rounded-lg w-32 dark:bg-zinc-600 dark:border-zinc-700 dark:text-gray-300"
                        disabled={!isCreate && !editando}
                        value={values?.factFis_rayosx ?? ""}
                      >
                        <option value="" disabled hidden>
                          Selecciona
                        </option>
                        <option value={true}>Sí</option>
                        <option value={false}>No</option>
                      </Field>
                    </div>
                    <div>
                      <label
                        htmlFor="factFis_ecografia"
                        className="pt-2 mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                        disabled={!isCreate && !editando}
                      >
                        Ecografia:
                      </label>
                      <Field
                        as="select"
                        name="factFis_ecografia"
                        className="px-2 text-base cursor-pointer max-xl:text-sm text-zinc-500 shadow appearance-none border border-gray-300 bg-zinc-200 rounded-lg w-32 dark:bg-zinc-600 dark:border-zinc-700 dark:text-gray-300"
                        disabled={!isCreate && !editando}
                        value={values?.factFis_ecografia ?? ""}
                      >
                        <option value="" disabled hidden>
                          Selecciona
                        </option>
                        <option value={true}>Sí</option>
                        <option value={false}>No</option>
                      </Field>
                    </div>
                  </div>
                  <label
                    htmlFor="factFis_lugar"
                    className="pt-2 mb-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                  >
                    Lugar donde se realizó:
                  </label>

                  <Field
                    component="textarea"
                    name="factFis_lugar"
                    value={values?.factFis_lugar}
                    rows={2}
                    className="p-2 text-base max-xl:text-sm text-zinc-700 shadow appearance-none border border-gray-300 bg-stone-200 rounded-lg w-full dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600"
                    disabled={!isCreate && !editando}
                  />
                  <label
                    htmlFor="factFis_numVeces"
                    className="mt-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                  >
                    Nº de veces:
                  </label>
                  <Field
                    type="number"
                    name="factFis_numVeces"
                    value={values?.factFis_numVeces ?? ""}
                    className="p-2 text-base max-xl:text-sm text-zinc-700 shadow appearance-none border border-gray-300 bg-stone-200 rounded-lg w-32 mr-[52%] dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600 max-xl:mr-10"
                    disabled={!isCreate && !editando}
                  />
                </div>
                <div className="flex flex-col justify-evenly mb-2 max-xl:flex-col">
                  <span className="font-inter font-semibold text-gray-600 text-lg max-xl:text-sm dark:text-white/75">
                    4 Factores químicos durante la gestación:
                  </span>
                  <label
                    htmlFor="factQuim_farmacos"
                    className="pt-2 mb-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                  >
                    Fármacos anticonvulsivantes:
                  </label>

                  <Field
                    component="textarea"
                    name="factQuim_farmacos"
                    value={values?.factQuim_farmacos}
                    rows={2}
                    className="p-2 text-base max-xl:text-sm text-zinc-700 shadow appearance-none border border-gray-300 bg-stone-200 rounded-lg w-full dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600"
                    disabled={!isCreate && !editando}
                  />
                  <label
                    htmlFor="factQuim_farmOtros"
                    className="pt-2 mb-1 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                  >
                    Otros:
                  </label>

                  <Field
                    component="textarea"
                    name="factQuim_farmOtros"
                    value={values?.factQuim_farmOtros}
                    rows={1}
                    className="p-2 text-base max-xl:text-sm text-zinc-700 shadow appearance-none border border-gray-300 bg-stone-200 rounded-lg w-full dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600"
                    disabled={!isCreate && !editando}
                  />
                  <label
                    htmlFor="factQuim_anticonceptivos"
                    className="pt-2 mb-1 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                  >
                    Anticonceptivos orales:
                  </label>

                  <Field
                    component="textarea"
                    name="factQuim_anticonceptivos"
                    value={values?.factQuim_anticonceptivos}
                    rows={1}
                    className="p-2 text-base max-xl:text-sm text-zinc-700 shadow appearance-none border border-gray-300 bg-stone-200 rounded-lg w-full dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600"
                    disabled={!isCreate && !editando}
                  />
                  <label
                    htmlFor="fact_Quim_gestagenosAB"
                    className="pt-2 mb-1 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                  >
                    Gestágenos para evitar AB.:
                  </label>

                  <Field
                    component="textarea"
                    name="fact_Quim_gestagenosAB"
                    value={values?.fact_Quim_gestagenosAB}
                    rows={1}
                    className="p-2 text-base max-xl:text-sm text-zinc-700 shadow appearance-none border border-gray-300 bg-stone-200 rounded-lg w-full dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600"
                    disabled={!isCreate && !editando}
                  />
                  <label
                    htmlFor="factQuim_expProfesional"
                    className="pt-2 mb-1 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                  >
                    Exposición Profesional:
                  </label>

                  <Field
                    component="textarea"
                    name="factQuim_expProfesional"
                    value={values?.factQuim_expProfesional}
                    rows={1}
                    className="p-2 text-base max-xl:text-sm text-zinc-700 shadow appearance-none border border-gray-300 bg-stone-200 rounded-lg w-full dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600"
                    disabled={!isCreate && !editando}
                  />
                  <label
                    htmlFor="factQuim_enolismo"
                    className="pt-2 mb-1 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                  >
                    Enolismo:
                  </label>

                  <Field
                    component="textarea"
                    name="factQuim_enolismo"
                    value={values?.factQuim_enolismo}
                    rows={1}
                    className="p-2 text-base max-xl:text-sm text-zinc-700 shadow appearance-none border border-gray-300 bg-stone-200 rounded-lg w-full dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600"
                    disabled={!isCreate && !editando}
                  />
                </div>
                <div className="flex flex-col justify-evenly mb-2 max-xl:flex-col">
                  <span className="font-inter font-semibold text-gray-600 text-lg max-xl:text-sm dark:text-white/75">
                    5 Gesta:
                  </span>
                  <div className="flex flex-row mt-3 mb-2 max-xl:flex-col items-center justify-between">
                    <div className="">
                      <label
                        htmlFor="gesta"
                        className="mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                      >
                        Gesta:
                      </label>
                      <Field
                        type="number"
                        name="gesta"
                        value={values?.gesta ?? ""}
                        className="p-2 text-base max-xl:text-sm text-zinc-700 shadow appearance-none border border-gray-300 bg-stone-200 rounded-lg w-20  dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600 max-xl:mr-10"
                        disabled={!isCreate && !editando}
                      />
                    </div>
                    <div className="">
                      <label
                        htmlFor="gesta_para"
                        className="mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                      >
                        Para:
                      </label>
                      <Field
                        type="number"
                        name="gesta_para"
                        value={values?.gesta_para ?? ""}
                        className="p-2 text-base max-xl:text-sm text-zinc-700 shadow appearance-none border border-gray-300 bg-stone-200 rounded-lg w-20 dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600 max-xl:mr-10"
                        disabled={!isCreate && !editando}
                      />
                    </div>
                    <div className="">
                      <label
                        htmlFor="gesta_nroNativivos"
                        className="mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                      >
                        Nº Nativivos:
                      </label>
                      <Field
                        type="number"
                        name="gesta_nroNativivos"
                        value={values?.gesta_nroNativivos ?? ""}
                        className="p-2 text-base max-xl:text-sm text-zinc-700 shadow appearance-none border border-gray-300 bg-stone-200 rounded-lg w-20 dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600 max-xl:mr-10"
                        disabled={!isCreate && !editando}
                      />
                    </div>
                    <div className="">
                      <label
                        htmlFor="gesta_malformados"
                        className="mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                      >
                        Malformados:
                      </label>
                      <Field
                        type="number"
                        name="gesta_malformados"
                        value={values?.gesta_malformados ?? ""}
                        className="p-2 text-base max-xl:text-sm text-zinc-700 shadow appearance-none border border-gray-300 bg-stone-200 rounded-lg w-20 dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600 max-xl:mr-10"
                        disabled={!isCreate && !editando}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row mt-3 mb-2 max-xl:flex-col items-center justify-between">
                    <div className="">
                      <label
                        htmlFor="gesta_nroNatimortos"
                        className="mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                      >
                        Nº Natimortos:
                      </label>
                      <Field
                        type="number"
                        name="gesta_nroNatimortos"
                        value={values?.gesta_nroNatimortos ?? ""}
                        className="p-2 text-base max-xl:text-sm text-zinc-700 shadow appearance-none border border-gray-300 bg-stone-200 rounded-lg w-20 dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600 max-xl:mr-10"
                        disabled={!isCreate && !editando}
                      />
                    </div>
                    <div className="">
                      <label
                        htmlFor="gesta_nroAB"
                        className="mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                      >
                        Nº AB:
                      </label>
                      <Field
                        type="number"
                        name="gesta_nroAB"
                        value={values?.gesta_nroAB ?? ""}
                        className="p-2 text-base max-xl:text-sm text-zinc-700 shadow appearance-none border border-gray-300 bg-stone-200 rounded-lg w-20 dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600 max-xl:mr-10"
                        disabled={!isCreate && !editando}
                      />
                    </div>
                    <div className="">
                      <label
                        htmlFor="gesta_exp"
                        className="mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                      >
                        Exp:
                      </label>
                      <Field
                        type="number"
                        name="gesta_exp"
                        value={values?.gesta_exp ?? ""}
                        className="p-2 text-base max-xl:text-sm text-zinc-700 shadow appearance-none border border-gray-300 bg-stone-200 rounded-lg w-20 dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600 max-xl:mr-10"
                        disabled={!isCreate && !editando}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row mt-3 mb-2 max-xl:flex-col items-center justify-between">
                    <div>
                      <label
                        htmlFor="gesta_anticonceptivos"
                        className="pt-2 mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                        disabled={!isCreate && !editando}
                      >
                        Ind. de uso de anticonceptivos:
                      </label>
                      <Field
                        as="select"
                        name="gesta_anticonceptivos"
                        className="px-2 text-base cursor-pointer max-xl:text-sm text-zinc-500 shadow appearance-none border border-gray-300 bg-zinc-200 rounded-lg w-32 dark:bg-zinc-600 dark:border-zinc-700 dark:text-gray-300"
                        disabled={!isCreate && !editando}
                        value={values?.gesta_anticonceptivos ?? ""}
                      >
                        <option value="" disabled hidden>
                          Selecciona
                        </option>
                        <option value={true}>Sí</option>
                        <option value={false}>No</option>
                      </Field>
                    </div>
                    <div className="flex items-center">
                      <label
                        htmlFor="gesta_anticonsTipo"
                        className=" mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                      >
                        Tipo:
                      </label>
                      <Field
                        component="textarea"
                        name="gesta_anticonsTipo"
                        value={values?.gesta_anticonsTipo}
                        rows={1}
                        placeholder="..."
                        className="p-2 text-base max-xl:text-sm text-zinc-700 shadow appearance-none border border-gray-300 bg-stone-200 rounded-lg  dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600"
                        disabled={!isCreate && !editando}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row mt-3 mb-2 max-xl:flex-col items-center justify-between">
                    <div className="">
                      <label
                        htmlFor="gesta_periodo_1_2"
                        className="mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                      >
                        Período entre 1º y 2º semana gestación:
                      </label>
                      <Field
                        type="number"
                        name="gesta_periodo_1_2"
                        value={values?.gesta_periodo_1_2 ?? ""}
                        className="p-2 text-base max-xl:text-sm text-zinc-700 shadow appearance-none border border-gray-300 bg-stone-200 rounded-lg w-20 dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600 max-xl:mr-10"
                        disabled={!isCreate && !editando}
                      />
                    </div>
                    <div className="">
                      <label
                        htmlFor="gesta_periodo_2_3"
                        className="mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                      >
                        2º y 3º:
                      </label>
                      <Field
                        type="number"
                        name="gesta_periodo_2_3"
                        value={values?.gesta_periodo_2_3 ?? ""}
                        className="p-2 text-base max-xl:text-sm text-zinc-700 shadow appearance-none border border-gray-300 bg-stone-200 rounded-lg w-20 dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600 max-xl:mr-10"
                        disabled={!isCreate && !editando}
                      />
                    </div>
                    <div className="">
                      <label
                        htmlFor="gesta_periodo_3_4"
                        className="mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                      >
                        3º y 4º:
                      </label>
                      <Field
                        type="number"
                        name="gesta_periodo_3_4"
                        value={values?.gesta_periodo_3_4 ?? ""}
                        className="p-2 text-base max-xl:text-sm text-zinc-700 shadow appearance-none border border-gray-300 bg-stone-200 rounded-lg w-20 dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600 max-xl:mr-10"
                        disabled={!isCreate && !editando}
                      />
                    </div>
                  </div>
                  <label
                    htmlFor="gesta_periodoUso"
                    className="pt-2 mb-1 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                  >
                    Período de uso:
                  </label>

                  <Field
                    component="textarea"
                    name="gesta_periodoUso"
                    placeholder="..."
                    value={values?.gesta_periodoUso}
                    rows={1}
                    className="p-2 text-base max-xl:text-sm text-zinc-700 shadow appearance-none border border-gray-300 bg-stone-200 rounded-lg w-full dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600"
                    disabled={!isCreate && !editando}
                  />
                </div>
                <div className="flex flex-col justify-evenly mb-2 max-xl:flex-col">
                  <span className="font-inter font-semibold text-gray-600 text-lg max-xl:text-sm dark:text-white/75">
                    6 Parto:
                  </span>
                  <div className="flex flex-row mt-3 mb-2 max-xl:flex-col items-center">
                    <label
                      htmlFor="parto"
                      className=" mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                    >
                      Parto:
                    </label>
                    <Field
                      as="select"
                      name="parto"
                      value={values?.parto}
                      disabled={!isCreate && !editando}
                      className=" px-2 text-base cursor-pointer max-xl:text-sm text-zinc-500 shadow appearance-none border border-gray-300 bg-zinc-200 rounded-lg w-56 dark:bg-zinc-600 dark:border-zinc-700 dark:text-gray-300 "
                    >
                      <option value="" disabled hidden>
                        Seleccione una opción
                      </option>
                      <option value="eutócico">Eutócico</option>
                      <option value="cesárea">Cesárea</option>
                      <option value="forceps">Forceps</option>
                    </Field>
                  </div>
                  <div className="flex flex-row mt-3 mb-2 max-xl:flex-col items-center">
                    <label
                      htmlFor="parto_porque"
                      className="mr-2 mb-1 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                    >
                      ¿Por qué?:
                    </label>

                    <Field
                      component="textarea"
                      name="parto_porque"
                      placeholder="..."
                      value={values?.parto_porque}
                      rows={1}
                      className="p-2 text-base max-xl:text-sm text-zinc-700 shadow appearance-none border border-gray-300 bg-stone-200 rounded-lg w-3/5 dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600"
                      disabled={!isCreate && !editando}
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-evenly mb-2 max-xl:flex-col">
                  <span className="font-inter font-semibold text-gray-600 text-lg max-xl:text-sm dark:text-white/75">
                    7 Datos del Nacimiento:
                  </span>
                  <div className="flex flex-row mt-3 mb-2 max-xl:flex-col items-center justify-between">
                    <div className="flex items-center">
                      <label
                        htmlFor="dn_peso"
                        className=" mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                      >
                        Peso:
                      </label>
                      <Field
                        component="textarea"
                        name="dn_peso"
                        value={values?.dn_peso}
                        rows={1}
                        placeholder="..."
                        className="p-2 text-base w-28 max-xl:text-sm text-zinc-700 shadow appearance-none border border-gray-300 bg-stone-200 rounded-lg  dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600"
                        disabled={!isCreate && !editando}
                      />
                    </div>
                    <div className="flex items-center">
                      <label
                        htmlFor="dn_talla"
                        className=" mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                      >
                        Talla:
                      </label>
                      <Field
                        component="textarea"
                        name="dn_talla"
                        value={values?.dn_talla}
                        rows={1}
                        placeholder="..."
                        className="p-2 w-28 text-base max-xl:text-sm text-zinc-700 shadow appearance-none border border-gray-300 bg-stone-200 rounded-lg  dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600"
                        disabled={!isCreate && !editando}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="dn_pc"
                        className="mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                      >
                        PC:
                      </label>
                      <Field
                        type="number"
                        step="0.1"
                        placeholder="0.0..."
                        name="dn_pc"
                        value={values?.dn_pc ?? ""}
                        className="p-2 text-base max-xl:text-sm text-zinc-700 shadow appearance-none border border-gray-300 bg-stone-200 rounded-lg w-20 dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600 max-xl:mr-10"
                        disabled={!isCreate && !editando}
                      />
                    </div>
                    <div className="flex items-center">
                      <label
                        htmlFor="dn_apgar"
                        className=" mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                      >
                        APGAR:
                      </label>
                      <Field
                        component="textarea"
                        name="dn_apgar"
                        value={values?.dn_apgar}
                        rows={1}
                        placeholder="..."
                        className="p-2 text-base w-28 max-xl:text-sm text-zinc-700 shadow appearance-none border border-gray-300 bg-stone-200 rounded-lg  dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600"
                        disabled={!isCreate && !editando}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row mt-3 mb-2 max-xl:flex-col items-center justify-between">
                    <div>
                      <label
                        htmlFor="dn_llanto"
                        className=" mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                      >
                        Llanto:
                      </label>
                      <Field
                        as="select"
                        name="dn_llanto"
                        value={values?.dn_llanto}
                        disabled={!isCreate && !editando}
                        className=" px-2 text-base cursor-pointer max-xl:text-sm text-zinc-500 shadow appearance-none border border-gray-300 bg-zinc-200 rounded-lg w-32 dark:bg-zinc-600 dark:border-zinc-700 dark:text-gray-300 "
                      >
                        <option value="" disabled hidden>
                          Seleccione
                        </option>
                        <option value="Inmediato">Inmediato</option>
                        <option value="Tardio">Tardio</option>
                        <option value="No sabe">No sabe</option>
                      </Field>
                    </div>
                    <div>
                      <label
                        htmlFor="dn_oxigeno"
                        className=" mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                      >
                        Oxígeno terapia:
                      </label>
                      <Field
                        as="select"
                        name="dn_oxigeno"
                        value={values?.dn_oxigeno}
                        disabled={!isCreate && !editando}
                        className=" px-2 text-base cursor-pointer max-xl:text-sm text-zinc-500 shadow appearance-none border border-gray-300 bg-zinc-200 rounded-lg w-32 dark:bg-zinc-600 dark:border-zinc-700 dark:text-gray-300 "
                      >
                        <option value="" disabled hidden>
                          Seleccione
                        </option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                        <option value="No sabe">No sabe</option>
                      </Field>
                    </div>
                    <div>
                      <label
                        htmlFor="dn_ictericia"
                        className=" mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                      >
                        Ictericia Neonatal:
                      </label>
                      <Field
                        as="select"
                        name="dn_ictericia"
                        value={values?.dn_ictericia}
                        disabled={!isCreate && !editando}
                        className=" px-2 text-base cursor-pointer max-xl:text-sm text-zinc-500 shadow appearance-none border border-gray-300 bg-zinc-200 rounded-lg w-32 dark:bg-zinc-600 dark:border-zinc-700 dark:text-gray-300 "
                      >
                        <option value="" disabled hidden>
                          Seleccione
                        </option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                        <option value="No sabe">No sabe</option>
                      </Field>
                    </div>
                  </div>
                  <div className="flex flex-row mt-3 mb-2 max-xl:flex-col items-center justify-between">
                    <div>
                      <label
                        htmlFor="dn_cianosis"
                        className=" mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                      >
                        Cianosis:
                      </label>
                      <Field
                        as="select"
                        name="dn_cianosis"
                        value={values?.dn_cianosis}
                        disabled={!isCreate && !editando}
                        className=" px-2 text-base cursor-pointer max-xl:text-sm text-zinc-500 shadow appearance-none border border-gray-300 bg-zinc-200 rounded-lg w-32 dark:bg-zinc-600 dark:border-zinc-700 dark:text-gray-300 "
                      >
                        <option value="" disabled hidden>
                          Seleccione
                        </option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                        <option value="No sabe">No sabe</option>
                      </Field>
                    </div>
                    <div>
                      <label
                        htmlFor="dn_incubadora"
                        className=" mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                      >
                        Incubadora:
                      </label>
                      <Field
                        as="select"
                        name="dn_incubadora"
                        value={values?.dn_incubadora}
                        disabled={!isCreate && !editando}
                        className=" px-2 text-base cursor-pointer max-xl:text-sm text-zinc-500 shadow appearance-none border border-gray-300 bg-zinc-200 rounded-lg w-32 dark:bg-zinc-600 dark:border-zinc-700 dark:text-gray-300 "
                      >
                        <option value="" disabled hidden>
                          Seleccione
                        </option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                        <option value="No sabe">No sabe</option>
                      </Field>
                    </div>
                    <div>
                      <label
                        htmlFor="dn_fotop"
                        className="pt-2 mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                        disabled={!isCreate && !editando}
                      >
                        Fototerapia:
                      </label>
                      <Field
                        as="select"
                        name="dn_fotop"
                        className="px-2 text-base cursor-pointer max-xl:text-sm text-zinc-500 shadow appearance-none border border-gray-300 bg-zinc-200 rounded-lg w-32 dark:bg-zinc-600 dark:border-zinc-700 dark:text-gray-300"
                        disabled={!isCreate && !editando}
                        value={values?.dn_fotop ?? ""}
                      >
                        <option value="" disabled hidden>
                          Selecciona
                        </option>
                        <option value={true}>Sí</option>
                        <option value={false}>No</option>
                      </Field>
                    </div>
                  </div>
                  <div className="flex flex-row mt-3 mb-2 max-xl:flex-col items-center justify-between">
                    <div>
                      <label
                        htmlFor="dn_exsanguineo"
                        className="pt-2 mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                        disabled={!isCreate && !editando}
                      >
                        Exsanguíneo:
                      </label>
                      <Field
                        as="select"
                        name="dn_exsanguineo"
                        className="px-2 text-base cursor-pointer max-xl:text-sm text-zinc-500 shadow appearance-none border border-gray-300 bg-zinc-200 rounded-lg w-32 dark:bg-zinc-600 dark:border-zinc-700 dark:text-gray-300"
                        disabled={!isCreate && !editando}
                        value={values?.dn_exsanguineo ?? ""}
                      >
                        <option value="" disabled hidden>
                          Selecciona
                        </option>
                        <option value={true}>Sí</option>
                        <option value={false}>No</option>
                      </Field>
                    </div>
                    <div>
                      <label
                        htmlFor="dn_exsan_fiebre"
                        className="pt-2 mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                        disabled={!isCreate && !editando}
                      >
                        Fiebre:
                      </label>
                      <Field
                        type="checkbox"
                        name="dn_exsan_fiebre"
                        value={values?.dn_exsan_fiebre ?? ""}
                        checked={values?.dn_exsan_fiebre ?? false}
                        className=" text-base max-xl:text-sm text-sky-600 shadow appearance-none border border-gray-300 bg-stone-200 rounded-sm  dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600"
                        disabled={!isCreate && !editando}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="dn_exsan_convul"
                        className="pt-2 mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                        disabled={!isCreate && !editando}
                      >
                        Convulsiones:
                      </label>
                      <Field
                        type="checkbox"
                        name="dn_exsan_convul"
                        value={values?.dn_exsan_convul ?? ""}
                        checked={values?.dn_exsan_convul ?? false}
                        className=" text-base max-xl:text-sm text-sky-600 shadow appearance-none border border-gray-300 bg-stone-200 rounded-sm  dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600"
                        disabled={!isCreate && !editando}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="dn_hemorragia"
                        className="pt-2 mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                        disabled={!isCreate && !editando}
                      >
                        Hemorragias:
                      </label>
                      <Field
                        as="select"
                        name="dn_hemorragia"
                        className="px-2 text-base cursor-pointer max-xl:text-sm text-zinc-500 shadow appearance-none border border-gray-300 bg-zinc-200 rounded-lg w-32 dark:bg-zinc-600 dark:border-zinc-700 dark:text-gray-300"
                        disabled={!isCreate && !editando}
                        value={values?.dn_hemorragia ?? ""}
                      >
                        <option value="" disabled hidden>
                          Selecciona
                        </option>
                        <option value={true}>Sí</option>
                        <option value={false}>No</option>
                      </Field>
                    </div>
                  </div>
                  <div className="flex flex-row mt-3 mb-2 max-xl:flex-col items-center justify-between">
                    <div className="flex items-center">
                      <label
                        htmlFor="dn_hemoIni"
                        className=" mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                      >
                        Hemorragia Inicio:
                      </label>
                      <Field
                        component="textarea"
                        name="dn_hemoIni"
                        value={values?.dn_hemoIni}
                        rows={1}
                        placeholder="..."
                        className="p-2 text-base max-xl:text-sm text-zinc-700 shadow appearance-none border border-gray-300 bg-stone-200 rounded-lg  dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600"
                        disabled={!isCreate && !editando}
                      />
                    </div>
                    <div className="flex items-center">
                      <label
                        htmlFor="dn_hemoDura"
                        className=" mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                      >
                        Hemorragia Duración:
                      </label>
                      <Field
                        component="textarea"
                        name="dn_hemoDura"
                        value={values?.dn_hemoDura}
                        rows={1}
                        placeholder="..."
                        className="p-2 text-base max-xl:text-sm text-zinc-700 shadow appearance-none border border-gray-300 bg-stone-200 rounded-lg  dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600"
                        disabled={!isCreate && !editando}
                      />
                    </div>
                  </div>
                  <span className="font-inter font-semibold text-indigo-600 text-sm max-xl:text-sm dark:text-indigo-400/75">
                    Otras alteraciones:
                  </span>
                  <div className="flex flex-row mt-3 mb-2 max-xl:flex-col items-center justify-between">
                    <div>
                      <label
                        htmlFor="dn_altCriptorquidea"
                        className="pt-2 mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                        disabled={!isCreate && !editando}
                      >
                        Criptorquidea:
                      </label>
                      <Field
                        type="checkbox"
                        name="dn_altCriptorquidea"
                        value={values?.dn_altCriptorquidea ?? ""}
                        checked={values?.dn_altCriptorquidea ?? false}
                        className=" text-base max-xl:text-sm text-sky-600 shadow appearance-none border border-gray-300 bg-stone-200 rounded-sm  dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600"
                        disabled={!isCreate && !editando}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="dn_altCardiopatia"
                        className="pt-2 mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                        disabled={!isCreate && !editando}
                      >
                        Cardiopatía Congénita:
                      </label>
                      <Field
                        type="checkbox"
                        name="dn_altCardiopatia"
                        value={values?.dn_altCardiopatia ?? ""}
                        checked={values?.dn_altCardiopatia ?? false}
                        className=" text-base max-xl:text-sm text-sky-600 shadow appearance-none border border-gray-300 bg-stone-200 rounded-sm  dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600"
                        disabled={!isCreate && !editando}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="dn_altFlap"
                        className="pt-2 mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                        disabled={!isCreate && !editando}
                      >
                        Flap:
                      </label>
                      <Field
                        type="checkbox"
                        name="dn_altFlap"
                        value={values?.dn_altFlap ?? ""}
                        checked={values?.dn_altFlap ?? false}
                        className=" text-base max-xl:text-sm text-sky-600 shadow appearance-none border border-gray-300 bg-stone-200 rounded-sm  dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600"
                        disabled={!isCreate && !editando}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="dn_altAnal"
                        className="pt-2 mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                        disabled={!isCreate && !editando}
                      >
                        Atresia anal:
                      </label>
                      <Field
                        type="checkbox"
                        name="dn_altAnal"
                        value={values?.dn_altAnal ?? ""}
                        checked={values?.dn_altAnal ?? false}
                        className=" text-base max-xl:text-sm text-sky-600 shadow appearance-none border border-gray-300 bg-stone-200 rounded-sm  dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600"
                        disabled={!isCreate && !editando}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="dn_altNeural"
                        className="pt-2 mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                        disabled={!isCreate && !editando}
                      >
                        Defectos del tubo Neural:
                      </label>
                      <Field
                        type="checkbox"
                        name="dn_altNeural"
                        value={values?.dn_altNeural ?? ""}
                        checked={values?.dn_altNeural ?? false}
                        className=" text-base max-xl:text-sm text-sky-600 shadow appearance-none border border-gray-300 bg-stone-200 rounded-sm  dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600"
                        disabled={!isCreate && !editando}
                      />
                    </div>
                  </div>
                  <label
                    htmlFor="dn_altObs"
                    className="pt-2 mr-2 text-base max-xl:text-sm font-medium text-gray-800 dark:text-gray-300"
                  >
                    Obs.:
                  </label>

                  <Field
                    component="textarea"
                    name="dn_altObs"
                    placeholder="..."
                    value={values?.dn_altObs}
                    rows={3}
                    className="p-2 text-base max-xl:text-sm text-zinc-700 shadow appearance-none border border-gray-300 bg-stone-200 rounded-lg w-full dark:bg-slate-800 dark:text-gray-400 dark:border-slate-600"
                    disabled={!isCreate && !editando}
                  />
                </div>
                <div className="flex justify-center mt-4">
                  <button
                    type="submit"
                    disabled={
                      isSubmitting ||
                      isValidating ||
                      !isValid ||
                      (!isCreate && !editando)
                    }
                    className={`text-white text-sm shadow-lg font-bold py-2 px-2 w-full rounded-md ${
                      !isCreate && !editando
                        ? "bg-gray-400/40 dark:bg-gray-500/70"
                        : "bg-emerald-500 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600"
                    }`}
                  >
                    {isSubmitting ? "Guardando datos..." : "Guardar datos"}
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  };
  return (
    <>
      {antecedenteP === "load" ? (
        <h2 className="p-3 font-inter text-gray-500 dark:text-white">
          Cargando ....
        </h2>
      ) : (
        <div className="bg-indigo-200 dark:bg-sky-800 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-lg mt-3 py-4">
          <h4 className="text-center font-inter font-bold text-lg">
            Antecedentes Personales
          </h4>
          <hr className="mb-3 ml-auto mr-auto border border-sky-700 shadow dark:border-zinc-200 max-w-lg" />
          {antecedenteP ? (
            <div className="flex flex-col justify-center items-center w-full">
              <div className="flex justify-start w-full ml-[60px]">
                <button
                  type="button"
                  onClick={handleEditar}
                  className={`mt-4 py-2 px-6 text-white font-semibold ${
                    editando
                      ? "bg-rose-500 hover:bg-rose-600 dark:bg-rose-700 dark:hover:bg-rose-800"
                      : "bg-amber-400 hover:bg-amber-500 dark:bg-amber-600 dark:hover:bg-amber-700"
                  }  rounded-lg shadow-md `}
                >
                  {editando ? "Cancelar" : "Editar"}
                </button>
              </div>

              <div className="pl-8 mt-4 w-full">
                <h2 className="text-sm text-left mb-2 font-inter font-semibold text-sky-700 dark:text-white">
                  Editar Apartado:
                </h2>
              </div>
              <Formm isCreate={false} handleFun={handlePatch} />
            </div>
          ) : (
            <div>
              <div className="pl-4">
                <button
                  onClick={handleAgregar}
                  className={` ${
                    agregar
                      ? "ml-[21px] bg-rose-500 hover:bg-rose-600 dark:bg-rose-700 dark:hover:bg-rose-800"
                      : "bg-sky-600 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-600"
                  } text-white rounded-md shadow-md p-2 font-semibold`}
                >
                  {agregar ? "Cancelar" : "Agregar Apartado"}
                </button>
              </div>
              {agregar && (
                <div className="flex flex-col justify-center items-center w-full">
                  <div className="pl-[38px] mt-4 w-full">
                    <h2 className="text-sm text-left mb-2 font-inter font-semibold text-sky-700 dark:text-white">
                      Agregar Apartado:
                    </h2>
                  </div>
                  <Formm isCreate={true} handleFun={handlePost} />
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default AntecedentesPForm;