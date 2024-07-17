"use client";
import { Card, Grid, Text } from "@nextui-org/react";
import { useEffect, useState } from "react";

const Main = ({ items }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Items List</h1>
      <Grid.Container gap={2}>
        {items.map((item) => (
          <Grid xs={12} sm={6} key={item.id}>
            <Card>
              <Card.Header>
                <Text h4>{item.name}</Text>
              </Card.Header>
              <Card.Body>
                <Text>{item.description}</Text>
              </Card.Body>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/items");
  const items = await res.json();

  return {
    props: { items },
  };
}

export default Main;
