function createDocuments(collection, howMany) {
  const c = db[collection];
  for (let i = 0; i < howMany; i++) {
    c.insert({ docNumber: i });
  }
}