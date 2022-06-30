import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import styles from '../styles/OSInput.module.scss'

type Inputs = {
    event: string,
    observation: string,
    oscode: string,
    ospieces: string,
    osclient: string,
};

const OSIntput = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onOSSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    }
    const onEventSubmit: SubmitHandler<Inputs> = data => console.log(data);

    // console.log(watch("oscode")) 

    return (
        <div className={styles.formContainer}>
            {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
            <form className={styles.form} onSubmit={handleSubmit(onOSSubmit)}>
                {/* include validation with required or other standard HTML validation rules */}
                <div className={styles.inlineForm}>
                    <label htmlFor="event">EV-EX</label>
                    <select {...register("event")}>
                        <option value="IC">IC</option>
                        <option value="AV">AV</option>
                        <option value="EX">EX</option>
                    </select>
                    <label htmlFor="observation">Observation</label>
                    <input {...register("observation")} />
                </div>
                <div className={styles.osForm}>
                    <label htmlFor="oscode">OS</label>
                    <input {...register("oscode")} />
                </div>

                <input type="submit" value="Get OS details" />
            </form>

            <form className={styles.detailsForm} onSubmit={handleSubmit(onEventSubmit)}>
                <div className={styles.inlineForm}>
                    <label htmlFor="ospieces">Pieces in OS</label>
                    <input {...register("ospieces")} />
                    <label htmlFor="osclient">Client</label>
                    <input {...register("osclient")} />
                </div>

                <input type="submit" value="Save event" />
            </form>
        </div>
    );
}

export default OSIntput