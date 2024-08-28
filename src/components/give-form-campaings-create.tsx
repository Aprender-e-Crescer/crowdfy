import { Uploadimagens } from '../components/Upload-Imagens-campaings-create'

interface Props {
  title: string
  subtitle: string
  label1: string
  label2: string
  label3: string
  placeholder1: string
  placeholder2: string
  placeholder3: string
}

export default function Give({
  title,
  subtitle,
  label1,
  label2,
  label3,
  placeholder1,
  placeholder2,
  placeholder3,
}: Props) {
  return (
    <>
      <div className="hidden sm:flex flex-col p-5">
        <div className="flex flex-col gap-4 w-96">
          <div className="text-[#101828] font-semibold text-2xl">
            <h2>{title}</h2>
            <div className="text-xl font-normal text-[#475467]">
              <h2>{subtitle}</h2>
            </div>

            <div className="mt-6">
              <label
                htmlFor="campaign-title"
                className="block mb-3 text-xl  text-[#1E293B] dark:text-white"
              >
                {label1}
              </label>
              <input
                type="text"
                id="campaign-title"
                className="flex flex-col font-light border border-gray-300 rounded-md w-full h-10 placeholder-gray-400 placeholder:text-lg text-xl"
                placeholder={placeholder1}
                required
              />
            </div>

            <div className="">
              <label
                htmlFor="campaign-date"
                className="block mb-3 mt-2 text-xl text-[#344054] dark:text-white"
              >
                {label2}
              </label>
              <input
                type="text"
                id="campaign-date"
                className="flex flex-col font-light border border-gray-300 rounded-md w-full h-10 placeholder-gray-400 placeholder:text-xl text-xl"
                placeholder={placeholder2}
                required
              />
            </div>

            <div className="">
              <label
                htmlFor="campaign-goal"
                className="block mb-3 mt-2 text-xl text-[#344054] dark:text-white"
              >
                {label3}
              </label>
              <input
                type="text"
                id="campaign-goal"
                className="flex flex-col font-light border border-gray-300 rounded-md w-full h-10 placeholder-gray-400 placeholder:text-xl text-xl"
                placeholder={placeholder3}
                required
              />
            </div>
          </div>

          <Uploadimagens
            descricao="ou solte sua foto aqui"
            enviar="Clique para enviar"
            tiposEnvio="SVG, PNG, JPG ou GIF (max. 1MB)"
          />
        </div>
      </div>

      <div className="flex sm:hidden flex-col items-center p-5">
        <div className="flex flex-col gap-4 w-96">
          <div className="text-black font-semibold text-2xl">
            <h2>{title}</h2>
            <div className="text-xl font-normal text-[#475467]">
              <h2>{subtitle}</h2>
            </div>

            <div className="mt-6">
              <label
                htmlFor="campaign-title"
                className="block mb-4 text-xl text-[#1E293B] dark:text-white"
              >
                {label1}
              </label>
              <input
                type="text"
                id="campaign-title"
                className="flex flex-col font-light border border-gray-300 rounded-sm w-full h-10 placeholder-gray-400 placeholder:text-lg text-xl"
                placeholder={placeholder1}
                required
              />
            </div>

            <div className="">
              <label
                htmlFor="campaign-date"
                className="block mb-4 text-xl text-black dark:text-white"
              >
                {label2}
              </label>
              <input
                type="text"
                id="campaign-date"
                className="flex flex-col font-light border border-gray-300 rounded-sm w-full h-10 placeholder-gray-400 placeholder:text-xl text-xl"
                placeholder={placeholder2}
                required
              />
            </div>

            <div className="">
              <label
                htmlFor="campaign-goal"
                className="block mb-4 text-xl  text-black dark:text-white"
              >
                {label3}
              </label>
              <input
                type="text"
                id="campaign-goal"
                className="flex flex-col font-light border border-gray-300 rounded-sm w-full h-10 placeholder-gray-400 placeholder:text-xl text-xl"
                placeholder={placeholder3}
                required
              />
            </div>
          </div>

          <Uploadimagens
            descricao="ou solte sua foto aqui"
            enviar="Clique para enviar"
            tiposEnvio="SVG, PNG, JPG ou GIF (max. 1MB)"
          />
        </div>
      </div>
    </>
  )
}
