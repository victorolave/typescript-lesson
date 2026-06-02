// Partial
interface Usuario {
  id: number;
  nombre: string;
  email: string;
}

const usuario: Usuario = {
  id: 1,
  nombre: "Victor",
  email: "victor@example.com",
};

const updatedUsuario: Partial<Usuario> = {
  nombre: "Updated",
  email: "updated@example.com",
};

// Required
interface Config {
  host?: string;
  puerto?: number;
}

const config: Required<Config> = {
  host: "localhost",
  puerto: 3000,
};

// Readonly
const readonlyConfig: Readonly<Config> = {
  host: "localhost",
  puerto: 3000,
};

// Pick

interface Student extends User {
  identificacion: string;
  cursos: string[];
  notas: number[];
  promedio: number;
  aprobado: boolean;
}

type StudentSummary = Pick<Student, "nombre" | "aprobado">;

const student: StudentSummary = {
  nombre: "Juan Perez",
  aprobado: false,
};

// Omit
type StudentSummaryOmit = Omit<Student, "nombre" | "aprobado">;

// Record

type Rol = "admin" | "editor" | "lector";

const permisos: Record<Rol, string[]> = {
  admin: ["leer", "escribir", "borrar"],
  editor: ["leer", "escribir"],
  lector: ["leer"],
};

// Exclude y Extract

type Estado = "pendiente" | "pagado" | "cancelado" | "error";

type EstadoFinal = Exclude<Estado, "pendiente">;
type SoloPendiente = Extract<Estado, "pendiente">;

// NonNullable
type Texto = string | null | undefined;
type TextoSeguro = NonNullable<Texto>; // string
