import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postDog, getTemperaments } from "../../redux/actions/actions";
import { validate } from "../../Extras/validate";
import styles from "../Form/Form.module.css";

const Form = () => {
  const crearButtonRef = useRef(null)  
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    //? Estado local para todos los inputs
    id: "",
    name: "",
    height: "",
    weight: "",
    age: "",
    image: "",
    createInDb: "",
    temperament: [],
    temperaments: [], //? Acá se guardan los temperamentos filtrados para el select
  });

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const temperaments = useSelector((state) => state.temperaments);
  const [selectedTemps, setSelectedTemps] = useState([]);
  const [errors, setErrors] = useState({});
  const [filter] = useState("");
  const filteredTemps = temperaments?.filter((temp) =>
    temp.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleChange = (event) => {
    // Manejo del input
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  
    // Manejo de errores
    const updatedErrors = { ...errors, [name]: validate(name, value) };
    setErrors(updatedErrors);
  
    // Deshabilitar el botón si hay algún error
    const hasErrors = Object.values(updatedErrors).some((error) => !!error);
    crearButtonRef.current.disabled = hasErrors;
  };

  const handleSelect = (event) => {
    const selectedTemperament = event.target.value;
    const selectedTempObject = temperaments.find(
      (temp) => temp.name === selectedTemperament
    );
  
    // Verificar si el temperamento ya está seleccionado
    if (
      !input.temperament.includes(selectedTemperament) &&
      !selectedTemps.some((temp) => temp.name === selectedTemperament)
    ) {
      setInput((prevInput) => ({
        ...prevInput,
        temperament: [...prevInput.temperament, selectedTemperament],
        temperaments: [...prevInput.temperaments, selectedTempObject],
      }));
      setSelectedTemps((prevSelectedTemperaments) => [
        ...prevSelectedTemperaments,
        selectedTempObject,
      ]);
      setErrors((prevErrors) => ({
        ...prevErrors,
        temperaments: "",
      }));
    } else {
      // Mostrar error si el temperamento ya está seleccionado
      setErrors((prevErrors) => ({
        ...prevErrors,
        temperaments: "Este temperamento ya ha sido seleccionado",
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
      const dog = {
        ...input,
        temperaments: input.temperaments.map((temp) => temp.name),
      };
      dispatch(postDog(dog));
      setInput({
        id: "",
        name: "",
        height: "",
        weight: "",
        age: "",
        image: "",
        createInDb: "",
        temperament: [],
        temperaments: [],
      });
      setSelectedTemps([]);
  };

  const handleRemove = (temperament) => {
    setSelectedTemps((prevSelectedTemps) =>
      prevSelectedTemps.filter((temp) => temp !== temperament)
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <h1 className={styles.title}>¡Crea tu propia raza!</h1>
            <div className={styles.field}>
              <label className={styles.label}>Raza:</label>
              <input
                type="text"
                value={input.name}
                name="name"
                onChange={handleChange}
                className={styles.input}
                placeholder="Nombre de la raza"
              />
              {errors.name && <p className={styles.error}>{errors.name}</p>}
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Altura:</label>
              <input
                type="text"
                value={input.height}
                name="height"
                onChange={handleChange}
                className={styles.input}
                placeholder="Altura min - altura max"
              />
              {errors.height && <p className={styles.error}>{errors.height}</p>}
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Peso:</label>
              <input
                type="text"
                value={input.weight}
                name="weight"
                onChange={handleChange}
                className={styles.input}
                placeholder="Peso min - peso max"
              />
              {errors.weight && <p className={styles.error}>{errors.weight}</p>}
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Esperanza de vida:</label>
              <input
                type="text"
                value={input.age}
                name="age"
                onChange={handleChange}
                className={styles.input}
                placeholder="Min - max"
              />
              {errors.age && <p className={styles.error}>{errors.age}</p>}
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Imagen URL:</label>
              <input
                type="text"
                value={input.image}
                name="image"
                onChange={handleChange}
                className={styles.input}
                placeholder="http://example.com"
              />
              {errors.image && <p className={styles.error}>{errors.image}</p>}
            </div>
            <div className={styles.field}>
            <label htmlFor="temperament" className={styles.label}>
              Temperamento:
            </label>
            <select
              id="temperaments"
              onChange={handleSelect}
              className={styles.select}
            >
              <option value="">Seleccionar</option>
              {filteredTemps?.map((temp) => (
                <option key={temp.id} value={temp.name}>
                  {temp.name}
                </option>
              ))}
            </select>
            <div className={styles.selectedTemps}>
              {selectedTemps?.sort().map((temp) => (
                <div key={temp.id} className={styles.selectedTemp}>
                  <span>{temp.name}</span>
                  <button
                    type="button"
                    onClick={() => handleRemove(temp)}
                    className={styles.removeButton}
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
            {errors.temperaments && (
              <p className={styles.error}>{errors.temperaments}</p>
            )}
            {errors.duplicateTemperament && (
              <p className={styles.error}>{errors.duplicateTemperament}</p>
            )}
          </div>
            <button type="submit" ref={crearButtonRef} className={styles.createButton}>
              Crear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
