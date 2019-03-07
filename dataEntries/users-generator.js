const faker = require('faker');

function createUsers() {
    
    const fakeUsers = []
    const desiredFakeUsers = 100000
    const sizes = [6, 7, 8, 9, 10, 11, 12]
    
    const createFakeUser = () => 
    ({
      name: faker.name.findName(),
      email: faker.internet.email(),
      shoe_size: sizes[Math.floor(Math.random() * 6)]
    })

    for (let i = 0; i < desiredFakeUsers; i++) {
      fakeUsers.push(createFakeUser());
    }
    return fakeUsers
}

module.exports = fakeUsers