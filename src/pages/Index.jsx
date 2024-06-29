import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-light-gray">
      <Card className="w-full max-w-md p-6 rounded-lg shadow-lg bg-white">
        <CardHeader>
          <CardTitle className="text-3xl font-poppins text-center text-deep-navy">
            Welcome to AudioStream
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Label htmlFor="username" className="font-roboto text-deep-navy">
                Username
              </Label>
              <Input id="username" type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal focus:ring focus:ring-teal focus:ring-opacity-50" />
            </div>
            <div>
              <Label htmlFor="password" className="font-roboto text-deep-navy">
                Password
              </Label>
              <Input id="password" type="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal focus:ring focus:ring-teal focus:ring-opacity-50" />
            </div>
            <Button type="submit" className="w-full bg-teal text-white rounded-md shadow-md hover:bg-teal-dark focus:outline-none focus:ring-2 focus:ring-teal focus:ring-opacity-50">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;