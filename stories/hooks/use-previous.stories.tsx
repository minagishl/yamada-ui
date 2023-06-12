import { Button, Text, useBoolean, usePrevious } from '@yamada-ui/react'

export default {
  title: 'Hooks / usePrevious',
}

export const basic = () => {
  const [flg, { toggle }] = useBoolean()

  const prevFlg = usePrevious(flg)

  return (
    <>
      <Text>
        state: {String(flg)}, prev: {String(prevFlg ?? 'none')}
      </Text>
      <Button onClick={toggle}>Click me to toggle the boolean value</Button>
    </>
  )
}
