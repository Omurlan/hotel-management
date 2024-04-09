import { defineField } from 'sanity';

const booking = {
  name: 'booking',
  title: 'Бронирование',
  type: 'document',
  fields: [
    defineField({
      name: 'user',
      title: 'Пользователь',
      type: 'reference',
      to: [{ type: 'user' }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'hotelRoom',
      title: 'Номер',
      type: 'reference',
      to: [{ type: 'hotelRoom' }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'checkinDate',
      title: 'Дата въезда',
      type: 'date',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'checkoutDate',
      title: 'Дата выезда',
      type: 'date',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'numberOfDays',
      title: 'Количество дней',
      type: 'number',
      initialValue: 1,
      validation: Rule => Rule.required().min(1),
    }),
    defineField({
      name: 'discount',
      title: 'Скидка',
      type: 'number',
      initialValue: 0,
      validation: Rule => Rule.required().min(0),
    }),
    defineField({
      name: 'adults',
      title: 'Взрослые',
      type: 'number',
      initialValue: 1,
      validation: Rule => Rule.required().min(1),
    }),
    defineField({
      name: 'children',
      title: 'Дети',
      type: 'number',
      initialValue: 0,
      validation: Rule => Rule.required().min(0),
    }),
    defineField({
      name: 'totalPrice',
      title: 'Итоговая цена',
      type: 'number',
      validation: Rule => Rule.required().min(0),
    }),
  ],
};

export default booking;
