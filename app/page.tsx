import { Card, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import ModeToggle from "@/components/mode-toggle"


const mockOrders = [
  { id: "A001", customer: "Alice Smith", delivery: "Newport", time: "9:00 AM", status: "Delivered" },
  { id: "A002", customer: "Ben Jones", delivery: "Altona", time: "10:30 AM", status: "In Transit" },
  { id: "A003", customer: "Cara Liu", delivery: "Yarraville", time: "1:00 PM", status: "Pending" },
]

export default function Dashboard() {
  return (
    <main className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">🌸 Florist Dashboard</h1>
        <ModeToggle />
      </div>

      <Card>
        <CardContent className="p-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Delivery Zone</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.delivery}</TableCell>
                  <TableCell>{order.time}</TableCell>
                  <TableCell>{order.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  )
}
