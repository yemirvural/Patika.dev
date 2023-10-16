const FilterCount = ({gender, species}) => {
    let arr = [];
    
    if ((filterGender.length < 1 || filterSpecies.length < 1) || species === undefined) {
      const { loading: loading4, data: genderData } = useQuery(COUNT_GENDER, {
        variables: { filter: {
          gender: gender || genderState,
          species: species || speciesState
        }}, 
      });
      arr.push(genderData?.characters.info.count);
    }
      
    if (gender === undefined) {
      filterGender.map(gender => {
        const { loading: loading4, data: genderData } = useQuery(COUNT_GENDER, {
          variables: { filter: {
            gender: gender || genderState,
            species: species || speciesState
          }}, 
        });
          arr.push(genderData?.characters.info.count);
      })
    }
    
    if (filterSpecies.length > 1 && species === undefined) {
      filterSpecies.map(species => {
        const { loading: loading4, data: genderData } = useQuery(COUNT_GENDER, {
          variables: { filter: {
            gender: gender || genderState,
            species: species || speciesState
          }}, 
        });
        arr.push(genderData?.characters.info.count);
      })
    }
    return arr.sort((a,b) => b-a)[0] || 0;
  }
