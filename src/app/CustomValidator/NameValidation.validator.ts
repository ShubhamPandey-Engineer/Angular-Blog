import { AbstractControl } from "@angular/forms";

export function checkName(control:AbstractControl):{[key:string]:any} | null{
    const isValid=/test/.test(control.value)
    return isValid ? {'nameError': {value:control.value}}:null
}