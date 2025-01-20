import React from "react";
import { Platform, SafeAreaView } from "react-native";
import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableData,
  TableFooter,
  TableCaption,
} from "@/components/ui/table";
import { Badge, BadgeText, BadgeIcon } from "@/components/ui/badge";
import { CloseIcon, CheckIcon, InfoIcon } from "@/components/ui/icon";
import { ScrollView } from "@/components/ui/scroll-view";
import { examples } from "@/components/docs/examples/table";
import { Text } from "@/components/ui/text";
import { SafeAreaView } from 'react-native-safe-area-context';
export const NewAndFeed = () => {
  const nativeProp = Platform.OS !== "web" ? { useRNView: true } : {};

  return (
    <SafeAreaView>
      <ScrollView
        className="bg-background-0"
        contentContainerClassName="px-3 pb-6"
      >
        <Box className="p-5 rounded-lg m-3 mt-5 bg-background-50 gap-5 min-h-[200px] max-w-[600px] lg:min-w-[700px] w-full self-center">
          <Text className="border-b border-outline-200 pb-2 lg:pb-3 lg:text-xl text-base">
            Default
          </Text>
          <Center className="flex-1">
            <Box className="w-full rounded-xl border border-outline-300 overflow-hidden max-w-[500px]">
              <Box className="overflow-x-scroll">
                <Table className="w-full">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Class</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableData>Rajesh</TableData>
                      <TableData>VII</TableData>
                      <TableData {...nativeProp}>
                        <Badge
                          size="sm"
                          variant="solid"
                          action="success"
                          className="self-start w-fit"
                        >
                          <BadgeIcon as={CheckIcon} className="mr-2" />
                          <BadgeText>Success</BadgeText>
                        </Badge>
                      </TableData>
                    </TableRow>
                    <TableRow>
                      <TableData>Ravi</TableData>
                      <TableData>IX</TableData>
                      <TableData {...nativeProp}>
                        <Badge
                          size="sm"
                          variant="solid"
                          action="warning"
                          className="self-start w-fit"
                        >
                          <BadgeIcon as={InfoIcon} className="mr-2" />
                          <BadgeText>Pending</BadgeText>
                        </Badge>
                      </TableData>
                    </TableRow>
                    <TableRow className="border-none">
                      <TableData>Ananya</TableData>
                      <TableData>X</TableData>
                      <TableData {...nativeProp}>
                        <Badge
                          size="sm"
                          variant="solid"
                          action="error"
                          className="self-start w-fit"
                        >
                          <BadgeIcon as={CloseIcon} className="mr-2" />
                          <BadgeText>Failed</BadgeText>
                        </Badge>
                      </TableData>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Box>
          </Center>
        </Box>
        <Box className="p-5 border border-outline-100 rounded-lg my-2.5 gap-5 min-h-[200px] max-w-[600px] lg:min-w-[700px] w-full self-center">
          <Text className="border-b border-outline-200 pb-2 lg:pb-3 lg:text-xl text-base">
            Default
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
                    <TableData>
                      rajesh@example.com
                    </TableData>
                    <TableData>1234567890</TableData>
                  </TableRow>
                  <TableRow>
                    <TableData>Priya Sharma</TableData>
                    <TableData>
                      priya@example.com
                    </TableData>
                    <TableData>1234567890</TableData>
                  </TableRow>
                  <TableRow>
                    <TableData>Ravi Patel</TableData>
                    <TableData>ravi@example.com</TableData>
                    <TableData>1234567890</TableData>
                  </TableRow>
                  <TableRow>
                    <TableData>Ananya Gupta</TableData>
                    <TableData>
                      ananya@example.com
                    </TableData>
                    <TableData>1234567890</TableData>
                  </TableRow>
                  <TableRow>
                    <TableData>Arjun Singh</TableData>
                    <TableData>
                      arjun@example.com
                    </TableData>
                    <TableData>1234567890</TableData>
                  </TableRow>
                  <TableRow>
                    <TableData>Nisha Verma</TableData>
                    <TableData>
                      nisha@example.com
                    </TableData>
                    <TableData>1234567890</TableData>
                  </TableRow>
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableData>Table Footer</TableData>
                  </TableRow>
                </TableFooter>
                <TableCaption>
                  Table Caption
                </TableCaption>
              </Table>
            </Box>
          </Center>
        </Box>

        {examples?.length > 0 &&
          examples.map((Example: any, index: any) => {
            const isFunctionComponent = typeof Example.Code === "function"; // Check if Code is a function
            return (
              <Box
                key={index}
                className="p-5 border border-outline-100 rounded-lg my-2.5 gap-5 min-h-[200px] max-w-[600px] lg:min-w-[700px] w-full self-center"
              >
                <Text className="border-b border-outline-200 pb-2 lg:pb-3 lg:text-xl text-base">
                  {Example.name}
                </Text>
                <Center className="flex-1">
                  {isFunctionComponent ? <Example.Code /> : Example.Code}
                </Center>
              </Box>
            );
          })}
      </ScrollView>
    </SafeAreaView>
  );
};

