import React from 'react'
import './Schedule.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import {useRef} from 'react';
import { useFormik } from 'formik';
import { Calendar } from "primereact/calendar";
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';

function Schedule() {
  const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.date.toLocaleDateString() });
    };

    const formik = useFormik({
        initialValues: {
            date: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.date) {
                errors.date = 'Date is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            if (!formik.errors.date) {
                // confirmation msg
                data && show(data);
                formik.resetForm();
            }
        }
    });

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };

  return (
    <div className="card flex justify-content-center">
      <form onSubmit={formik.handleSubmit} className="flex flex-column gap-1">
          {/* <label htmlFor="cal_date">Date</label> */}
          <Toast ref={toast} />
          <Calendar
              inputId="cal_date"
              name="date"
              value={formik.values.date}
              className={classNames({ 'p-invalid': isFormFieldInvalid('date') })}
              onChange={(e) => {
                  formik.setFieldValue('date', e.target.value);
              }}
          />
            {getFormErrorMessage('date')}
          <Button type="submit" label="Submit" style={{background:'black', borderColor:'black'}}/>
      </form>
    </div>
  )
}

export default Schedule
