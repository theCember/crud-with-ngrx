import { ValidatorFn, AbstractControl } from '@angular/forms';

export function validateDate(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        const today = setDateForComparsion(new Date());
        const calendarDate = setDateForComparsion(control.value);
        return calendarDate > today ? {birthDate: {value: control.value}} : null;
    };
}

const setDateForComparsion = (dateValue: Date): Date => {
    const date = new Date(dateValue);
    date.setHours(0, 0, 0, 0);
    return date;
};
