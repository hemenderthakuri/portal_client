import { DateFormatEnum } from "./DateFormatEnum";

export function formatDate(date: Date | null, format: DateFormatEnum) {

   if (date === null || date === undefined || !(date instanceof Date)) {
      return "";
   }

   if (DateFormatEnum.DDMMYYYY === format) {
      let dt = date.getDate();
      let mon = date.getMonth() + 1;
      return (padDigit(dt) + "/" + padDigit(mon) + "/" + date.getFullYear());
   }

   else if (DateFormatEnum.DDMONYYYY === format) {
      let dt = date.getDate();
      let mon = date.toLocaleString('default', { month: 'short' });
      let hour = date.getHours();
      let min = date.getMinutes();
      let ampm = hour > 12 ? "PM" : "AM";
      return (padDigit(dt) + " " + mon + " " + date.getFullYear() + ", " + padDigit(hour % 12) + ":" + padDigit(min) + ampm);
   }

   else if (DateFormatEnum.DDMONYYYYDate === format) {
      let dt = date.getDate();
      let mon = date.toLocaleString('default', { month: 'short' });
      return (padDigit(dt) + " " + mon + " " + date.getFullYear());
   }

   else if (DateFormatEnum.HHMMDDMONYYYY === format) {
      let dt = date.getDate();
      let mon = date.toLocaleString('default', { month: 'short' });
      let hour = date.getHours();
      let min = date.getMinutes();
      let ampm = hour > 12 ? "PM" : "AM";
      return (+ padDigit(hour % 12) + ":" + padDigit(min) + ampm + ", " + padDigit(dt) + " " + mon + " " + date.getFullYear());
   }
   else if (DateFormatEnum.HHMM === format) {
      let hour = date.getHours();
      let min = date.getMinutes();
      let ampm = hour > 12 ? "PM" : "AM";
      return (padDigit(hour % 12) + ":" + padDigit(min) + ampm);
   }
   return date.toString();
}

export function getAge(date: Date) {
   if (date === undefined || !(date instanceof Date)) {
      return "";
   }
   let dt = date.getDate();
   let mon = date.toLocaleString('default', { month: 'short' });

   var today = new Date();
   var years = today.getFullYear() - date.getFullYear();
   var month = today.getMonth() - date.getMonth();
   if (month < 0 || (month === 0 && today.getDate() < date.getDate())) {
      years = years - 1;
   }

   return (padDigit(dt) + "-" + mon + "-" + date.getFullYear() + " (" + years + "y)");
}

function padDigit(num: number) {
   return num < 10 ? "0" + num : "" + num;
}

export function getDateFromNum(date: Date | number | null) {
   if (date !== null) {
      return new Date(date);
   }
   return null;
}