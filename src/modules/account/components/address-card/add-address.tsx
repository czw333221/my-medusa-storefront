"use client"

import { Region } from "@medusajs/medusa"
import { Plus } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import { useEffect, useState } from "react"
import { useFormState } from "react-dom"

import useToggleState from "@lib/hooks/use-toggle-state"
import CountrySelect from "@modules/checkout/components/country-select"
import Input from "@modules/common/components/input"
import Modal from "@modules/common/components/modal"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import { addCustomerShippingAddress } from "@modules/account/actions"

const AddAddress = ({ region }: { region: Region }) => {
  const [successState, setSuccessState] = useState(false)
  const { state, open, close: closeModal } = useToggleState(false)

  const [formState, formAction] = useFormState(addCustomerShippingAddress, {
    success: false,
    error: null,
  })

  const close = () => {
    setSuccessState(false)
    closeModal()
  }

  useEffect(() => {
    if (successState) {
      close()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [successState])

  useEffect(() => {
    if (formState.success) {
      setSuccessState(true)
    }
  }, [formState])

  return (
    <>
      <button
        className="border border-ui-border-base rounded-rounded p-5 min-h-[220px] h-full w-full flex flex-col justify-between"
        onClick={open}
      >
        <span className="text-base-semi">新地址</span>
        <Plus />
      </button>

      <Modal isOpen={state} close={close}>
        <Modal.Title>
          <Heading className="mb-2">添加地址</Heading>
        </Modal.Title>
        <form action={formAction}>
          <Modal.Body>
            <div className="flex flex-col gap-y-2">
              <div className="grid grid-cols-2 gap-x-2">
                <Input
                  label="名字"
                  name="first_name"
                  required
                  autoComplete="given-name"
                />
                <Input
                  label="姓氏"
                  name="last_name"
                  required
                  autoComplete="family-name"
                />
              </div>
              <Input
                label="公司名称"
                name="company"
                autoComplete="organization"
              />
              <Input
                label="地址"
                name="address_1"
                required
                autoComplete="address-line1"
              />
              <Input
                label="详细地址"
                name="address_2"
                required
                autoComplete="address-line2"
              />
              <div className="grid grid-cols-[144px_1fr] gap-x-2">
                <Input
                  label="邮政编码"
                  name="postal_code"
                  required
                  autoComplete="postal-code"
                />
                <Input
                  label="城市"
                  name="city"
                  required
                  autoComplete="locality"
                />
              </div>
              <Input
                label="省/州"
                name="province"
                autoComplete="address-level1"
              />
              <CountrySelect
                region={region}
                name="country_code"
                required
                autoComplete="country"
              />
              <Input label="电话号码"
                name="phone"
                autoComplete="phone"
                required />
            </div>
            {formState.error && (
              <div className="text-rose-500 text-small-regular py-2">
                {formState.error}
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <div className="flex gap-3 mt-6">
              <Button
                type="reset"
                variant="secondary"
                onClick={close}
                className="h-10"
              >
                取消
              </Button>
              <SubmitButton>保存</SubmitButton>
            </div>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  )
}

export default AddAddress
