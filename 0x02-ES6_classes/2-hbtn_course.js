export default class HolbertonCourse {
  constructor(name, length, students) {
    this._typeChecker(name, 'string', 'Name');
    this._typeChecker(length, 'number', 'Length');
    this._typeChecker(students, 'array', 'Students');
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // eslint-disable-next-line class-methods-use-this
  _typeChecker(value, expectedType, varName, errorMsgValue) {
    let errorMsg = errorMsgValue;
    if (!errorMsg) {
      switch (expectedType) {
        case 'string':
          errorMsg = `${varName} must be a string`;
          break;
        case 'number':
          errorMsg = `${varName} must be a number`;
          break;
        case 'array':
          errorMsg = `${varName} must be an array of strings`;
          break;
        default:
          errorMsg = 'Invalid type';
      }
    }

    if (expectedType === 'array') {
      if (!Array.isArray(value) || !value.every((item) => typeof item === 'string')) {
        throw new TypeError(errorMsg);
      }
      // eslint-disable-next-line valid-typeof
    } else if (typeof value !== expectedType) {
      throw new TypeError(errorMsg);
    }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._typeChecker(name, 'string', 'Name');
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(name) {
    this._typeChecker(this.length, 'string', 'Length');
    this._length = name;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    this._typeChecker(students, 'array', 'Students');
    students.forEach((student) => this._typeChecker(student, 'string', 'Students'));
    this._students = students;
  }
}
