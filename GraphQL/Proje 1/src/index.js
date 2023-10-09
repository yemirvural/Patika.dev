import { loadFiles } from '@graphql-tools/load-files'
import { createSchema, createYoga } from 'graphql-yoga'
import { createServer } from 'node:http'
import { continents, countries, languages } from 'countries-list'
import { getCountryCode, getCountryData, getCountryDataList, getEmojiFlag } from 'countries-list'

async function main() {
  const schema = createSchema({
    typeDefs: await loadFiles('src/**/*.graphql'),
    resolvers: {
      Query: {
        continents: () => {
          return Object.keys(continents).map((code) => ({
            code,
            name: continents[code],
            countries: Object.values(countries).filter(country => country.continent === code)
          }))
        },
        continent: (_, { code }) => ({
          code,
          name: continents[code],
          countries: Object.values(countries).filter(country => country.continent === code),
        }),

        countries: () => Object.values(countries),
        country: (parent, args) => getCountryData(args.code),

        languages: () => Object.keys(languages).map((code) => ({
          code,
          name: languages[code].name,
          native: languages[code].native,
          rtl: Boolean(languages[code].rtl)
        })),
        language: (parent, args) => Object.keys(languages).filter(language => language === args.code).map((code) => ({
          code,
          name: languages[code].name,
          native: languages[code].native,
          rtl: Boolean(languages[code].rtl)
        }))
      },
      Country: {
        continent: (parent, args) => {
          const code = parent.continent;
          return {
            code,
            name: continents[code],
            countries: Object.values(countries).filter(
              (country) => country.continent === code
            ),
          };
        },
        languages: (parent, args) => {
          return Object.keys(languages)
            .filter(code => parent.languages.includes(code))
            .map(code => ({
              code,
              name: languages[code].name,
              native: languages[code].native,
              rtl: Boolean(languages[code].rtl)
            }));
        },
        emoji: (parent, args) => {
          const code = parent.iso2;
          return getEmojiFlag(code)
        }
      }
    }
  })

  const yoga = createYoga({ schema })
  const server = createServer(yoga)

  server.listen(4000, () => {
    console.info('Server is running on http://localhost:4000/graphql')
  })
}

main().catch(error => {
  console.error(error)
  process.exit(1)
})