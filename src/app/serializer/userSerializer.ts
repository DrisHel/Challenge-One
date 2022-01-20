import { Ageconversion } from '../utils/dateconversion';
import { FormatDate } from '../utils/formatdata';

const format = new FormatDate();
const conversion = new Ageconversion();
const serializer = ({ id, name, gender, birthdate, cityId }) => ({
  id,
  name,
  gender,
  birthdate: format.formatDateToRequest(birthdate),
  cityId,
  age: conversion.calculateAge(birthdate)
});

const paginatedSerialiser = ({ docs, totalDocs, limit, totalPages, page }) => ({
  client: docs.map(serializer),
  limit,
  total: totalDocs,
  offset: page,
  offsets: totalPages
});

export { serializer, paginatedSerialiser };
