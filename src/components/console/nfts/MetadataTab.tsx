"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NftMetadataDbType, NftTraitType } from "@/types/Metadata.type";
import { CalendarIcon, LeafIcon, MapPinIcon, RulerIcon } from "lucide-react";
import React, { useState } from "react";

type Props = {
  treeData: NftMetadataDbType;
};

const getMetadataIcon = (trait_type: string) => {
  switch (trait_type) {
    case "plantation_date":
    case "first_harvest_date":
    case "second_harvest_date":
    case "update_date":
      return <CalendarIcon className="size-4" />;
    case "species":
    case "type":
      return <LeafIcon className="size-4" />;
    case "initial_height":
    case "current_height":
    case "current_dbh":
    case "standard_growth_rate_height":
    case "observed_growth_rate_height":
    case "standard_growth_rate_dbh":
    case "observed_growth_rate_dbh":
      return <RulerIcon className="size-4" />;
    case "longitude":
    case "latitude":
      return <MapPinIcon className="size-4" />;
    default:
      return null;
  }
};

const MetadataTab: React.FC<Props> = ({ treeData }) => {
  const [activeTab, setActiveTab] = useState("details");
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="growth">Growth Data</TabsTrigger>
      </TabsList>
      <TabsContent value="details">
        <Card>
          <CardContent className="pt-6">
            {(treeData.metadata as NftTraitType[])
              .filter((item) =>
                [
                  "type",
                  "species",
                  "plantation_date",
                  "longitude",
                  "latitude",
                ].includes(item.trait_type)
              )
              .map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  {getMetadataIcon(item.trait_type)}
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      {item.trait_type}
                    </p>
                    <p className="text-lg">{item.value}</p>
                  </div>
                </div>
              ))}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="growth">
        <Card>
          <CardContent className="pt-6">
            {(treeData.metadata as NftTraitType[])
              .filter((item) =>
                [
                  "initial_height",
                  "current_height",
                  "age",
                  "canopy_cover_percentage",
                  "current_dbh",
                  "standard_growth_rate_height",
                  "observed_growth_rate_height",
                  "standard_growth_rate_dbh",
                  "observed_growth_rate_dbh",
                  "first_harvest_date",
                  "second_harvest_date",
                ].includes(item.trait_type)
              )
              .map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  {getMetadataIcon(item.trait_type)}
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      {item.trait_type}
                    </p>
                    <p className="text-lg">{item.value}</p>
                  </div>
                </div>
              ))}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default MetadataTab;
