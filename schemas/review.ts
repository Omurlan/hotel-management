import { defineField } from 'sanity';

const review = {
  name: 'review',
  title: 'Отзывы',
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
      title: 'Номер в отеле',
      type: 'reference',
      to: [{ type: 'hotelRoom' }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Отзыв',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'userRating',
      title: 'Рейтинг',
      type: 'number',
      validation: Rule =>
        Rule.required().min(1).max(5).error('Оценка должна быть от 1 до 5.'),
    }),
  ],
};

export default review;
