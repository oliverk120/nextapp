import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { giftlist } from '../database/gifts'
import { Table, User, Text, Badge } from '@nextui-org/react';
import Link from 'next/link';
import { Key, ReactElement, JSXElementConstructor, ReactFragment } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  const columns = [
    { key: "name", label: "NAME" },
    { key: "price", label: "PRICE" },
    { key: "description", label: "DESCRIPTION" },
    { key: "source_info", label: "SOURCE INFO" },
    { key: "source_info.tags", label: "TAGS" },
  ];


  //the loop below loops through giftlist and appends the tags from the source of to each individual gift item
  for (var i = 0; i < giftlist.length; i++) {
    //loop through each gifts in giftlist and add to giftlist_full
    for (var j = 0; j < giftlist[i].gifts.length; j++) {
      //add the following properties to each gift in giftlist including title
      // create a variable called source_info that includes all data from the current giftlist except for the gift property
      var source_info = {
        title: giftlist[i].title,
        source_url: giftlist[i].source_url,
        source_name: giftlist[i].source_name,
        source_logo_url: giftlist[i].source_logo_url,
        tags: giftlist[i].tags,
        recipient: giftlist[i].recipient,
        date: giftlist[i].date,
        gifts: 'n/a'
      }
      //add source info to each gift
      giftlist[i].gifts[j].source_info = source_info;
    }
  }

  const firstgift = giftlist[0].gifts;
  console.log(firstgift);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Hello </h1>

        <Table
          aria-label="Example table with dynamic content"
          css={{
            height: "auto",
            minWidth: "100%",
          }}
        >
          <Table.Header columns={columns}>
            {(column) => (
              <Table.Column key={column.key}>{column.label}</Table.Column>
            )}
          </Table.Header>
          <Table.Body items={firstgift}>
            {(item) => (
              <Table.Row key={item.name}>
                <Table.Cell>
                  <User squared
                    src={item.image_url}
                    name={item.name}
                    description={item.brand}
                  /><br />

                </Table.Cell>
                <Table.Cell>{item.price}</Table.Cell>
                <Table.Cell>
                  <Text>
                    {item.description.substring(0, 50)}  <br />
                    {item.source_info.recipient}
                  </Text>
                </Table.Cell>
                <Table.Cell>
                  <User squared
                    src={item.source_info.source_logo_url}
                    name={item.source_info.source_name}
                  />
                  <Text size={12}>
                    Source: <Link
                      href={source_info.source_url}
                    >{item.source_info.title.substring(0, 30)} - {item.source_info.date}</Link>
                  </Text>
                </Table.Cell>
                <Table.Cell>
                  {item.source_info.tags.map((tag: string) => (
                    <Badge key={tag} color="primary">
                      {tag}
                    </Badge>
                  ))}
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
          <Table.Pagination
            shadow
            noMargin
            align="center"
            rowsPerPage={15}
            onPageChange={(page) => console.log({ page })}
          />
        </Table>


      </main>
    </>
  )
}
