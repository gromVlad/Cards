import { Button } from './components/ui/button'
import { Card } from './components/ui/card'

export function App() {
  return (
    <>
      <Button variant="secondary" fullWidth={false}>
        Hello
      </Button>
      <Card>
        gfdgdfgdfgfdgfd
        <Button variant="secondary" fullWidth={false}>
          Hello
        </Button>
      </Card>
    </>
  )
}
