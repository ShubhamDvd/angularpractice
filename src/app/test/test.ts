import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name : 'exponentialStrength'
})

export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent: string): number {
    const exp = parseFloat(exponent);
    console.log(exponent);
    console.log(value);
    return Math.pow(value, isNaN(exp) ? 1 : exp);
  }
}

@Pipe({
  name : 'orderBy'
})

export class OrderBy implements PipeTransform {
  transform(value: any[], args: string): any {
    if (args === 'ascending') {
return value.sort();
    } else if (args === 'descending') {
      return value.sort().reverse();
    }

  }
}

@Pipe({
  name: 'default'
})

export class DefaultImage implements PipeTransform {
  transform(value: string, fallback: string): any {
    let image = '';

    if (value) {
      image = value;
    } else {
      image = fallback;
      console.log(fallback);
    }
    return image;
  }

}

@Pipe ({
  name: 'employeeTitle'
})

export class EmplTitle implements PipeTransform {
  transform(value: string, gender: string): any {
    if (gender.toLocaleLowerCase() === 'male') {
      return 'Mr.' + value;
    } else {
      return 'Miss.' + value;
    }
  }
}

@Pipe({
  name: 'reverseString'
})

export class ReverseString implements PipeTransform {
  transform(value: string): string {
    let newStr = '';
    for (let i = value.length - 1; i >= 0; i--) {
      newStr += value.charAt(i);
      console.log(newStr);
    }
    return newStr;
  }
}
