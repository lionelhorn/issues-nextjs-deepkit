import {classToPlain, plainToClass, t, validate} from '@deepkit/type';

class Config {
    @t color: string = '#334422';
}

class User {
    @t id: number = 0;

    @t createdAt: Date = new Date;
    @t modifiedAt: Date = new Date;

    @t firstName?: string;
    @t lastName?: string;

    @t config: Config = new Config;

    @t.pattern(/^\S+@\S+\.\S+$/)
    email?: string;

    constructor(@t.minLength(3) public username: string) {
    }

    public modified() {
        this.modifiedAt = new Date;
    }
}

export function testDeepkit() {

//deserialize JSON object to real instances
    const user = plainToClass(User, {
        username: 'Peter',
        createdAt: '2021-06-26T12:34:41.061Z',
        config: {color: '#221122'},
    }) as User;

    user instanceof User; //true
    user.config instanceof Config; //true
    user.modified(); //since its a real User instance, all methods are available

    //serialize as JSON
    const json = JSON.stringify(classToPlain(User, user));

    //deserialize the JSON
    const back = plainToClass(User, JSON.parse(json));

    //validate. Empty array when successfully validated and
    //array of detailed validation errors if not.
    const errors = validate(User, back);
}