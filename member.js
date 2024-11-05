function skillsMember() {
  return {
    name: 'skillsMember',
    members: [
      {
        name: 'name',
        type: 'string',
        required: true,
      },
      {
        name: 'skills',
        type: ['string'],
        required: true,
      },
    ],
  }
}
