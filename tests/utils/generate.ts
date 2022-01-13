import faker from "faker";

export function generateUserData(overide = {}) {
    return {
        id: faker.datatype.number(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        posts: [],
        comments: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        ...overide,
    };
}

export function generateUsersData(n: number = 1, overide = {}) {
    return Array.from(
        {
            length: n,
        },
        (_, i) => {
            return generateUserData({ id: i, ...overide });
        }
    );
}

export function generateUserPayload() {
    return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
    }
}
