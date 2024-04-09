import { defineField } from 'sanity';

const roomTypes = [
  { title: 'Basic', value: 'basic' },
  { title: 'Luxury', value: 'luxury' },
  { title: 'Suite', value: 'suite' },
];

const hotelRoom = {
  name: 'hotelRoom',
  title: 'Номера',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Название',
      type: 'string',
      validation: Rule =>
        Rule.required().max(50).error('Maximum 50 Characters'),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Описание',
      type: 'text',
      validation: Rule =>
        Rule.required().min(100).error('Minimum 100 Characters'),
    }),
    defineField({
      name: 'price',
      title: 'Цена',
      type: 'number',
      validation: Rule =>
        Rule.required().min(100).error('Minimum 100 Characters'),
    }),
    defineField({
      name: 'discount',
      title: 'Скидка',
      type: 'number',
      initialValue: 0,
      validation: Rule => Rule.min(0),
    }),
    defineField({
      name: 'images',
      title: 'Изображения',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'url', type: 'url', title: 'URL' },
            { name: 'file', type: 'file', title: 'File' },
          ],
        },
      ],
      validation: Rule =>
        Rule.required().min(3).error('Minimum of 3 images required'),
    }),
    defineField({
      name: 'coverImage',
      title: 'Обложка',
      type: 'object',
      fields: [
        { name: 'url', type: 'url', title: 'URL' },
        { name: 'file', type: 'file', title: 'File' },
      ],
      validation: Rule => Rule.required().error('Cover Image is required'),
    }),
    defineField({
      name: 'type',
      title: 'Тип номера',
      type: 'string',
      options: {
        list: roomTypes,
      },
      validation: Rule => Rule.required(),
      initialValue: 'basic',
    }),
    defineField({
      name: 'specialNote',
      title: 'Особая заметка',
      type: 'text',
      validation: Rule => Rule.required(),
      initialValue: 'Время заезда — 12:00, время выезда — 11:59. Если вы оставили какие-либо вещи, пожалуйста, свяжитесь с администратором.',
    }),
    defineField({
      name: 'dimension',
      title: 'Размер',
      type: 'string',
    }),
    defineField({
      name: 'numberOfBeds',
      title: 'Количество диванов',
      type: 'number',
      validation: Rule => Rule.min(1),
      initialValue: 1,
    }),
    defineField({
      name: 'offeredAmenities',
      title: 'Удобства',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', title: 'Icon', type: 'string' },
            { name: 'amenity', title: 'Amenity', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'isBooked',
      title: 'Забронировано',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isFeatured',
      title: 'Рекомендуемый',
      type: 'boolean',
      initialValue: false,
    }),
  ],
};

export default hotelRoom;
