import Layout from "../src/components/Layout";
import Heading from "../src/components/Elements/Heading";
import Button from "../src/components/Elements/Button";
import Image from "next/image";
import Link from 'next/link';
import { Icon } from "@iconify/react";

export default function Home() {
    return (
        <Layout title="Olá, Felipe">
            <main className="flex flex-col h-screen justify-center items-center">
                <div className="flex flex-col justify-between min-h-[540px] max-w-[256px]">
                    <section>
                        <div className="text-center flex flex-col gap-2">
                            <div className="flex items-center justify-center gap-1">
                                <Heading level="large" customStyle="text-others-grey-1000 font-semibold">
                                    Olá, Flávio
                                </Heading>
                                <div className="animate-waving-hand origin-[70%_70%]">
                                    <Icon icon="twemoji:waving-hand" width="32" height="32" />
                                </div>
                            </div>
                            <Heading level="medium" customStyle="!font-medium text-others-grey-700 leading-none">
                                Bem vindo à Copa Construgame
                            </Heading>
                        </div>
                    </section>
                    <section>
                        <div className="aspect-square w-full flex items-center justify-center">
                            <Image src="/images/welcome-coin.png" width="200" height="200" quality="100" alt="Welcome Image" />
                        </div>
                    </section>
                    <section className="flex flex-col gap-4">
                        <div className="flex justify-around">

                            <Button style="fill" level="large">
                                <Link href="/game/matches">PARTICIPAR AGORA</Link>
                            </Button>

                        </div>
                        <div className="">
                            <p className="font-sans text-xs text-others-grey-700 leading-[20px]">
                                Ao clicar no botão acima, você concorda e aceita com a nossa
                                <a className="pl-1">política de privacidade.</a>
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </Layout>
    )
}