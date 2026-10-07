/**
 * Locale-aware navigation helpers.
 * Re-exports next-intl navigation utilities configured with our routing.
 *
 * Use these instead of next/link and next/navigation directly —
 * they automatically handle locale prefixes.
 */
import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
