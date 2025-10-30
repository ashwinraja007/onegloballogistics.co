import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

interface CountryData {
  country: string;
  company: string;   // from your table
  website: string;   // best-known or "#"
  priority: number;  // order fallback
  flag?: string;
}

const countries: CountryData[] = [
  // Table order with sensible priorities
  { country: "SINGAPORE",     company: "OECL",     website: "https://www.oecl.sg/singapore/home", priority: 1,  flag: "/sg.svg" },
  { country: "MALAYSIA",      company: "OECL",     website: "https://www.oecl.sg/malaysia/home",  priority: 2,  flag: "/my.svg" },
  { country: "INDONESIA",     company: "OECL",     website: "https://www.oecl.sg/indonesia/home", priority: 3,  flag: "/id.svg" },
  { country: "THAILAND",      company: "OECL",     website: "https://www.oecl.sg/thailand/home",  priority: 4,  flag: "/th.svg" },
  { country: "AUSTRALIA",     company: "GGL",   website: "https://www.gglaustralia.com/",      priority: 7,  flag: "/au.svg" },
  { country: "INDIA",         company: "OECL",     website: "https://www.oecl.sg/india/home",      priority: 8,  flag: "/in.svg" },
  { country: "BANGLADESH",    company: "GGL",      website: "https://ggl.sg/",                     priority: 9,  flag: "/bd.svg" },
  { country: "SRI LANKA",     company: "GC",       website: "https://www.globalconsol.com",        priority: 10, flag: "/lk.svg" },
  { country: "PAKISTAN",      company: "GC",       website: "https://www.globalconsol.com",        priority: 11, flag: "/pk.svg" },
  { country: "QATAR",         company: "ONE GLOBAL",website: "https://oneglobalqatar.com/",         priority: 12, flag: "/qa.svg" },
  { country: "SAUDI ARABIA",  company: "AFNL",     website: "https://arabianfuturenet.com/",       priority: 13, flag: "/sa.svg" },
  { country: "USA",           company: "GGL",      website: "https://gglusa.us/",                  priority: 15, flag: "/us.svg" },
  { country: "UK",            company: "Moltech",  website: "https://moltech.uk/",                 priority: 16, flag: "/gb.svg" },
];

const findAustraliaCountry = () =>
  countries.find(c => c.country === "AUSTRALIA") ?? countries[0];

const CountrySelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRedirectCountry, setSelectedRedirectCountry] =
    useState<CountryData>(findAustraliaCountry());
  const dropdownRef = useRef<HTMLDivElement>(null);

  // AUSTRALIA appears first, then by priority
  const sortedCountries = [...countries].sort((a, b) => {
    if (a.country === "AUSTRALIA") return -1;
    if (b.country === "AUSTRALIA") return 1;
    return a.priority - b.priority;
  });

  const handleCountrySelect = (country: CountryData) => {
    setSelectedRedirectCountry(country);
    setTimeout(() => {
      window.open(country.website || "#", "_blank", "noopener,noreferrer");
    }, 100);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative z-50">
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="bg-[#003366] text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white hover:text-[#003366] transition"
            aria-label="Switch country or region"
          >
            <Globe className="w-5 h-5" />
            <span className="flex items-center gap-1">
              Switch Country <ChevronDown className="h-3 w-3 ml-1" />
            </span>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="center"
          className="w-[280px] border border-amber-100 bg-white p-2 rounded-lg shadow-lg max-h-[90vh]"
          onPointerDownOutside={(e) => e.preventDefault()}
        >
          <ScrollArea className="h-[calc(100vh-120px)] w-full pr-2 overflow-y-auto">
            <div className="grid grid-cols-1 gap-1 p-1">
              {sortedCountries.map((country) => (
                <DropdownMenuItem
                  key={country.country}
                  onSelect={(e) => {
                    e.preventDefault();
                    handleCountrySelect(country);
                  }}
                  className="cursor-pointer hover:bg-amber-50 p-2 rounded-md flex items-center gap-2 transition-colors"
                >
                  <motion.div whileHover={{ scale: 1.03 }} className="flex items-center w-full">
                    <div className="flex-shrink-0">
                      {country.flag ? (
                        <img
                          src={country.flag}
                          alt={`${country.country} flag`}
                          className="w-6 h-6 rounded-sm shadow-sm object-cover"
                        />
                      ) : (
                        <div className="w-6 h-6 bg-gray-200 rounded-sm flex items-center justify-center">
                          <Globe className="w-4 h-4 text-[#F6B100]" />
                        </div>
                      )}
                    </div>
                    <div className="ml-3 flex-1">
                      <div className="font-medium text-sm">{country.country}</div>
                      <div className="text-xs text-gray-500">
                        {country.company || "—"}
                      </div>
                    </div>
                  </motion.div>
                </DropdownMenuItem>
              ))}
            </div>
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CountrySelector;
