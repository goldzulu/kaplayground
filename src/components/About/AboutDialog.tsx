import { assets } from "@kaplayjs/crew";
import { REPO, VERSION } from "../../config/common";

export const AboutDialog = () => {
    return (
        <dialog id="my_modal_1" className="modal">
            <section className="modal-box max-w-md">
                <header className="flex items-center justify-center py-2">
                    {/* <img
                        alt="KAPLAY"
                        src={assets.kaplayground_dino.outlined}
                        className="h-48 object-scale-down"
                    >
                    </img> */}
                </header>

                <main className="max-w-xs mx-auto py-2">
                    <p className="text-center sm:px-6 py-2">
                        KAPLAYGROUND is a web editor designed for creating
                        KAPLAY games.
                    </p>

                    <p>
                        <span className="font-medium">Version:</span> {VERSION} AICLUB Edition
                        <br />
                        <a
                            className="font-medium link link-primary"
                            href={"https://kaplayjs.com"}
                            target="_blank"
                        >
                            KAPLAY Docs
                        </a>
                        <br />
                        <a
                            className="font-medium link link-primary"
                            href={REPO}
                            target="_blank"
                        >
                            Give a star
                        </a>
                        <br />
                        <a
                            className="font-medium link link-primary"
                            href={REPO + "/issues"}
                            target="_blank"
                        >
                            Report an issue
                        </a>
                    </p>
                </main>

                <footer>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">
                                Continue making!
                            </button>
                        </form>
                    </div>
                </footer>
            </section>

            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
};
