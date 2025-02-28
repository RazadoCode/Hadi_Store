"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, } from "@/components/ui/tabs"
import { useCart } from "../Context/CartContext"

export default function CheckoutForm() {

    const {cart, subtotal} = useCart();
    console.log(cart);
    const tax = 500;
  const shipping = 1000;

  const [activeTab, setActiveTab] = useState("personal")

 

  return (
    <div className="container mx-auto p-4">
      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        <div className="lg:col-span-2">
          <Card className="mb-6 lg:mb-0">
            <CardHeader>
              <CardTitle className="text-2xl">Checkout</CardTitle>
              <CardDescription>Complete your purchase by filling out the information below.</CardDescription>
            </CardHeader>
            <CardContent>
              

              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                

                <TabsContent value="personal" className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">Name</Label>
                      <Input id="first-name" placeholder="Name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">City</Label>
                      <Input id="last-name" placeholder="City" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="ahmed.dev@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+92 000-0000" />
                  </div>
                  <Button className="mt-4 w-full" >
                    Confirm the Payment
                  </Button>
                </TabsContent>

               
              </Tabs>
            </CardContent>
          </Card>
        </div>



        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="max-h-[300px] overflow-y-auto pr-2">
                  {cart.map((product, i) => (
                    <div key={i} className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="h-18 w-14 rounded-md bg-muted flex items-center justify-center overflow-hidden flex-shrink-0">
                          <img
                            src={product.img_d}
                            alt={product.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">{product.name} </p>
                          <p className="text-[12px] text-muted-foreground">Quantity: {product.quantity} Size: {product.size}</p>
                        </div>
                      </div>
                      <p className="font-medium ">PKR {product.price * product.quantity}</p>
                    </div>
                  ))}
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <p className="text-muted-foreground">Subtotal</p>
                    <p>PKR {subtotal}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-muted-foreground">Shipping</p>
                    <p>PKR {shipping}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-muted-foreground">Tax</p>
                    <p>PKR {tax}</p>
                  </div>
                </div>
                <Separator />
                <div className="flex justify-between font-medium">
                  <p>Total</p>
                  <p>PKR {subtotal + shipping + tax}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        
      </div>
    </div>
  )
}

