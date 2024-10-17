"use client"
import Link from "next/link";

export default function Formulario() {
    return (
        <>
            <div className="my-4 max-w-md w-full flex border-2 bg-white border-orange rounded-xl p-2 md:p-6">
                <Link href="">
                    <button className="bg-red-500 w-full block rounded-full py-1 md:py-2 my-2 px-6 text-lg text-white mx-4 uppercase">Solicitar orçamento</button>
                </Link>
            </div>
        </>
    )
}