﻿function parseCount(value) {
    const parsedValue = Number.parseFloat(value);
  
    if (isNaN(parsedValue)) {
      throw new Error("Невалидное значение");
    }
  
    return parsedValue;
  }
  
  function validateCount(value) {
    try {
      return parseCount(value);
    } catch (error) {
      return error;
    }
  }


  class Triangle {
    constructor(a, b, c) {
      if (a + b <= c || a + c <= b || b + c <= a) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
  
      this.a = a;
      this.b = b;
      this.c = c;
    }
  
    get perimeter() {
      return this.a + this.b + this.c;
    }
  
    get area() {
      const halfPerimeter = this.perimeter / 2;
      return +Math.sqrt(
        halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c)
      ).toFixed(3);
    }
  }
  
  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch (error) {
      return {
        get area() {
          return "Ошибка! Треугольник не существует";
        },
        get perimeter() {
          return "Ошибка! Треугольник не существует";
        }
      };
    }
  }