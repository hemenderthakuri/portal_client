export function getFieldProps(formik: any, fieldName: string) {
    return {
        name: fieldName,
        value: formik.values[fieldName],
        onChange: formik.handleChange,
        onBlur: formik.handleBlur,
        error: formik.errors[fieldName] && formik.touched[fieldName] ? formik.errors[fieldName] : ''
    };
}