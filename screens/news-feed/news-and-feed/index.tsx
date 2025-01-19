import React from "react";
import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableData,
  TableCaption,
} from "@/components/ui/table";
import { Platform } from "react-native";
import { ScrollView } from "@/components/ui/scroll-view";
import { Text } from "@/components/ui/text";

export const NewsAndFeed = () => {
  const nativeProp = Platform.OS !== "web" ? { useRNView: true } : {};

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerClassName="px-3 pb-6"
      >
        <Box className="p-5 border border-outline-100 rounded-lg my-2.5 gap-5 min-h-[200px] max-w-[600px] lg:min-w-[700px] w-full self-center">
          <Text className="border-b border-outline-200 pb-2 lg:pb-3 lg:text-xl text-base">
            Table with caption
          </Text>
          <Center className="flex-1">
            <Box className="rounded-lg overflow-hidden w-full">
              <Table className="w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email Address</TableHead>
                    <TableHead>Phone Number</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableData>Rajesh Kumar</TableData>
                    <TableData>rajesh@example.com</TableData>
                    <TableData>1234567890</TableData>
                  </TableRow>
                  <TableRow>
                    <TableData>Priya Sharma</TableData>
                    <TableData>priya@example.com</TableData>
                    <TableData>1234567890</TableData>
                  </TableRow>
                  <TableRow>
                    <TableData>Ravi Patel</TableData>
                    <TableData>ravi@example.com</TableData>
                    <TableData>1234567890</TableData>
                  </TableRow>
                  <TableRow>
                    <TableData>Ananya Gupta</TableData>
                    <TableData>ananya@example.com</TableData>
                    <TableData>1234567890</TableData>
                  </TableRow>
                  <TableRow>
                    <TableData>Arjun Singh</TableData>
                    <TableData>arjun@example.com</TableData>
                    <TableData>1234567890</TableData>
                  </TableRow>
                  <TableRow>
                    <TableData>Nisha Verma</TableData>
                    <TableData>nisha@example.com</TableData>
                    <TableData>1234567890</TableData>
                  </TableRow>
                </TableBody>
                <TableCaption>Showing recent membership details</TableCaption>
              </Table>
            </Box>
          </Center>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};
