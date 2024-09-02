import { Uploadimagens } from '../components/upload-Imagens'

interface Props {
  title: string
  subtitle: string
  labelTitle: string
  labelDateBirth: string
  labelMoney: string
  placeholderTitle: string
  placeholderDateBirth: string
  placeholderMoney: string
}

export default function Give({
  title,
  subtitle,
  labelTitle,
  labelDateBirth,
  labelMoney,
  placeholderTitle,
  placeholderDateBirth,
  placeholderMoney,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-5 w-full">
      <div className="flex flex-col gap-4 w-full xl:w-96">
        <div className="text-[#101828] font-semibold text-3xl">
          <h2>{title}</h2>
          <div className="text-base font-normal text-[#475467]">
            <h2>{subtitle}</h2>
          </div>

          <div className="mt-6">
            <label
              htmlFor="campaign-title"
              className="block mb-3 text-xl text-[#1E293B]"
            >
              {labelTitle}
            </label>
            <input
              type="text"
              id="campaign-title"
              className="flex font-light border border-gray-300 rounded-md w-full p-4 h-10 placeholder-gray-400 text-base"
              placeholder={placeholderTitle}
              required
            />
          </div>

          <div className="mt-2">
            <label
              htmlFor="campaign-date"
              className="block mb-3 text-xl text-[#344054]"
            >
              {labelDateBirth}
            </label>
            <input
              type="text"
              id="campaign-date"
              className="flex font-light border border-gray-300 rounded-md w-full p-4 h-10 placeholder-gray-400 text-base"
              placeholder={placeholderDateBirth}
              required
            />
          </div>

          <div className="mt-2">
            <label
              htmlFor="campaign-goal"
              className="block mb-3 text-xl text-[#344054]"
            >
              {labelMoney}
            </label>
            <input
              type="text"
              id="campaign-goal"
              className="flex font-light border border-gray-300 rounded-md w-full p-4 h-10 placeholder-gray-400 text-base"
              placeholder={placeholderMoney}
              required
            />
          </div>
        </div>

        <Uploadimagens
          descrition="ou solte sua foto aqui"
          toSendHover="Clique para enviar"
          shippingTypes="SVG, PNG, JPG ou GIF (max. 1MB)"
        />
      </div>
    </div>
  )
}
