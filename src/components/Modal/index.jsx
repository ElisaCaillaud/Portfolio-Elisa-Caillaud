import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Button from "../Competences";
import Collapse from "../Collapse";
import { XMarkIcon } from "@heroicons/react/16/solid";

export default function Modal({ isOpen, onClose, realisation }) {
  const [open, setOpen] = useState(isOpen); // Utiliser l'état initial de isOpen

  // Synchroniser l'état ouvert de la modale avec les props
  useState(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false);
        onClose();
      }}
      className="relative z-20"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-darkGreen bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-md bg-lightGreen text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full lg:max-w-4xl xl:max-w-5xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className=" sm:items-center ">
                <div className="mt-3 text-center sm:mt-0 sm:text-left">
                  <div className="relative">
                    <DialogTitle
                      as="h3"
                      className="mb-4 leading-7 text-28px text-darkGreen font-abril text-center"
                    >
                      {realisation.title}
                    </DialogTitle>
                    <XMarkIcon
                      className="h-6 w-6 text-darkGreen cursor-pointer absolute right-0 top-[-15px] sm:right-0 sm:top-0"
                      onClick={() => {
                        setOpen(false);
                        onClose();
                      }}
                    />
                  </div>
                  <div className="mt-2 text-center">
                    <p className="leading-7 text-base text-darkGreen font-lato text-center mb-4">
                      {realisation.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-center mt-4">
                    {realisation.skills.map((skill, index) => (
                      <div key={index} className="p-2">
                        <Button type="fonce" text={skill} />
                      </div>
                    ))}
                  </div>
                  <a
                    href={realisation.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-green underline"
                  >
                    Source Github
                  </a>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {realisation.pictures.map((picture, index) => (
                      <img
                        key={index}
                        src={process.env.PUBLIC_URL + picture}
                        alt={`Realisation ${index + 1}`}
                        className="rounded-md h-[420px] w-[460px] object-cover"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <Collapse
                title="Détails supplémentaires"
                content={realisation.details}
              />
            </div>
            <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  onClose();
                }}
                className="inline-flex w-full !justify-center px-3 py-2 leading-7 text-base font-bold text-darkGreen font-lato sm:ml-3 sm:w-auto"
              >
                Fermer
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
