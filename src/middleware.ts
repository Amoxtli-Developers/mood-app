import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) { // eslint-disable-line
    // Puedes agregar lógica personalizada aquí, por ejemplo, redirigir o loguear la petición.
    return NextResponse.next();
}
