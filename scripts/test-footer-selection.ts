#!/usr/bin/env tsx
/**
 * Test script to see which suburbs are selected for the footer
 */

import { getCachedFooterLocations } from '@mcoster/astro-local-package/src/utils/footer-locations';

async function testFooterSelection() {
  console.log('Testing footer suburb selection...\n');

  const footerLocations = await getCachedFooterLocations();

  console.log(`Selected ${footerLocations.length} suburbs for footer:\n`);

  footerLocations.forEach((location, index) => {
    const { suburb } = location;
    console.log(`${index + 1}. ${suburb.name} (${suburb.postcode})`);
    console.log(`   Population: ${suburb.population || 'N/A'}`);
    console.log(`   Distance: ${suburb.distanceKm}km ${suburb.direction}`);
    console.log(`   URL: ${location.url}`);
    console.log('');
  });
}

testFooterSelection().catch(console.error);