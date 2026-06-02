interface Serializable {
  toJSON(): string;
}

abstract class Entidad {
  protected id: number;
  constructor(id: number) {
    this.id = id;
  }
}

class Producto extends Entidad implements Serializable {
  constructor(id: number, nombre: string, valor: number, expiration: Date) {
    super(id);
    this.nombre = nombre;
    this.valor = valor;
    this.expiration = expiration;
    this._createdAt = new Date();
  }

  public nombre: string;
  public valor: number;
  public expiration: Date;
  private _createdAt: Date;

  describir(): string {
    return (
      "El producto se llama " +
      this.nombre +
      " y cuesta: " +
      this.valor +
      " y se vence el: " +
      this.expiration
    );
  }

  cuantoVale(): string {
    return "El producto vale: " + this.valor;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  toJSON(): string {
    return JSON.stringify({
      id: this.id,
      nombre: this.nombre,
      valor: this.valor,
    });
  }
}

const producto: Producto = new Producto(123, "Producto 1", 200, new Date());
console.log(producto.nombre);
console.log(producto.toJSON());
console.log(producto.describir());
